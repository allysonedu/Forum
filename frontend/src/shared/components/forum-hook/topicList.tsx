import React, { useEffect, useState } from 'react';
import {
  Grid,
  Paper,
  Typography,
  Dialog,
  Button,
  TextField,
  Box,
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
  const [newMessage, setNewMessage] = useState<string>('');
  const [selectedTopicId, setSelectedTopicId] = useState<number | null>(null);
  const [openMessageDialog, setOpenMessageDialog] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllTopics();
      setTopicsList(response.data);
    };
    fetchData();
  }, [saveTopic]);

  async function getMessages(id: number | undefined) {
    if (id) {
      const response = await getByTopicId(id);
      setMessagesMap(prevMessagesMap => ({
        ...prevMessagesMap,
        [id]: response.data,
      }));
    }
  }

  async function handleCreateMessage(topicId: number | undefined) {
    if (topicId && newMessage) {
      await createMessages({ content: newMessage, topic_id: topicId });
      setNewMessage(''); // Limpa a mensagem após envio
      getMessages(topicId); // Atualiza as mensagens após criar uma nova
    }
    setOpenMessageDialog(false);
  }

  const handleMessageClickOpen = (topicId: number | null) => {
    setSelectedTopicId(topicId);
    setOpenMessageDialog(true);
  };

  const handleMessageClose = () => {
    setOpenMessageDialog(false);
    setNewMessage('');
  };

  const [titleTopic, setTitleTopic] = useState('');
  const [descriptionTopic, setDescriptionTopic] = useState('');
  const [open, setOpen] = useState(false);

  async function saveTopic() {
    try {
      await createTopics({ title: titleTopic, content: descriptionTopic });
      setTitleTopic('');
      setDescriptionTopic('');
      handleClose();
    } catch (error) {
      console.error('Erro ao salvar o tópico:', error);
    }
  }

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
            onClick={handleClickOpen}
            variant="contained"
            color="primary"
            sx={{
              marginBottom: '20px',
            }}
          >
            Novo Tópico
          </Button>
        </Grid>

        {topicsList.map((topic, index) => (
          <Grid item xs={12} key={index}>
            <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px' }}>
              <Typography variant="h5">{topic.title}</Typography>
              <Typography variant="h6" gutterBottom>
                {topic.content}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Postado por {topic.user_name}
              </Typography>
              <IconButton
                type="button"
                aria-label="messages"
                onClick={() => getMessages(topic.id)}
                color="primary"
              >
                <MessageIcon />
              </IconButton>

              {/* Renderizar apenas as mensagens do tópico clicado */}
              {messagesMap[topic.id]?.map((message, msgIndex) => (
                <Paper
                  key={msgIndex}
                  sx={{
                    padding: '10px',
                    marginTop: '10px',
                    background: '#f5f5f5',
                  }}
                >
                  <Typography variant="body2" gutterBottom>
                    {message.content}
                  </Typography>
                </Paper>
              ))}

              <Box sx={{ marginTop: '10px' }}>
                <Button
                  variant="outlined"
                  onClick={() => handleMessageClickOpen(topic.id)}
                >
                  Comentar tópico
                </Button>
              </Box>
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
            <Grid item xs={12}>
              <TextField
                id="title"
                label="Título"
                multiline
                fullWidth
                value={titleTopic}
                onChange={e => setTitleTopic(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-multiline-static"
                label="Descrição"
                multiline
                rows={4}
                fullWidth
                value={descriptionTopic}
                onChange={e => setDescriptionTopic(e.target.value)}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={saveTopic} variant="contained">
            Salvar Tópico
          </Button>
        </DialogActions>
      </Dialog>

      {/* Modal para criar uma nova mensagem */}
      <Dialog open={openMessageDialog} onClose={handleMessageClose}>
        <DialogTitle>Criar Mensagem</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Mensagem"
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleMessageClose} color="secondary">
            Cancelar
          </Button>
          <Button
            onClick={() => handleCreateMessage(selectedTopicId)}
            variant="contained"
            color="primary"
          >
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
