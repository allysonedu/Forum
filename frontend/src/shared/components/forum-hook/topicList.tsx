import React, { useEffect, useState } from 'react';
import {
  Grid,
  Paper,
  Typography,
  Dialog,
  Button,
  TextField,
} from '@mui/material';

import { createTopics, getAllTopics } from '../../../api/topics_api';

import MessageIcon from '@mui/icons-material/Message';

import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { ITopics } from '../../dtos';
import { createMessages, getByTopicId } from '../../../api/messages';

export const TopicList: React.FC = () => {
  const [topicsList, setTopicsList] = useState<Array<ITopics>>([]);
  const [messagesMap, setMessagesMap] = useState<Record<number, Array<any>>>(
    {}
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllTopics();
      setTopicsList(response.data);
    };
    fetchData();
  }, []);

  const [titleTopic, settitleTopic] = useState('');
  const [descriptionTopic, setdescriptionTopic] = useState('');

  async function getmessage(id: number | undefined) {
    if (id) {
      const response = await getByTopicId(id);
      // Atualiza o mapa de mensagens, associando as mensagens ao tópico clicado.
      setMessagesMap(prevMessagesMap => ({
        ...prevMessagesMap,
        [id]: response.data,
      }));
    }
  }

  async function saveTopic() {
    try {
      await createTopics({ title: titleTopic, content: descriptionTopic });
      settitleTopic('');
      setdescriptionTopic('');
      handleClose();
    } catch (error) {
      console.error('Erro ao salvar o tópico:', error);
    }
  }

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button
            type="button"
            onClick={() => {
              handleClickOpen();
            }}
            variant="contained"
            color="primary"
          >
            Novo Tópico
          </Button>
        </Grid>

        {topicsList.map((topic, index) => (
          <Grid item xs={12} key={index}>
            <Paper
              elevation={3}
              style={{ padding: '50px', marginBottom: '100px' }}
            >
              <Typography variant="h5">{topic.title}</Typography>
              <Typography variant="h6">{topic.content}</Typography>
              <Typography variant="body2">Posted by {topic.user_id}</Typography>
              <Typography variant="caption">
                <IconButton
                  type="button"
                  aria-label="messages"
                  onClick={() => getmessage(topic.id)}
                >
                  <MessageIcon />
                </IconButton>
              </Typography>

              {/* Renderizar apenas as mensagens do tópico clicado */}
              {messagesMap[topic.id]?.map((message, msgIndex) => (
                <Typography key={msgIndex}>{message.content}</Typography>
              ))}
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Modal para criar um novo tópico */}
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Criar Tópico
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={theme => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid xs={12} item>
              <TextField
                id="title"
                label="Titulo"
                multiline
                fullWidth
                value={titleTopic}
                onChange={e => settitleTopic(e.target.value)}
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                id="outlined-multiline-static"
                label="Descrição"
                multiline
                rows={4}
                fullWidth
                value={descriptionTopic}
                onChange={e => setdescriptionTopic(e.target.value)}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={saveTopic}>
            Salvar Tópico
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
