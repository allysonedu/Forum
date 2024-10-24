// import { useNavigate, useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { ITopics } from '../../dtos/ITopics';
// import {
//   TextField,
//   Grid,
//   Box,
//   Button,
//   Typography,
//   Container,
// } from '@mui/material';
// import { useForm, Controller, SubmitHandler } from 'react-hook-form';

// import {
//   createTopics,
//   getAllTopics,
//   getOneTopics,
//   updateTopics,
//   deleteTopics,
// } from '../../../api/topics_api';

// export const CreateTopics: React.FC = () => {
//   const { id } = useParams();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const navigate = useNavigate();

//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//     reset,
//     setValue,
//   } = useForm<ITopics>({
//     defaultValues: {
//       title: '',
//       content: '',
//       likes: 0,
//       responses_count: 0,
//     },
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const response = await getOneTopics(Number(id));
//         if (response?.data) {
//           reset(response.data);
//         }
//       } catch (err) {
//         setError('Erro ao carregar os dados.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) {
//       fetchData();
//     } else {
//       setLoading(false); // Se não há id, é um novo registro, não precisa carregar dados
//     }
//   }, [id, reset]);

//   const handleDelete = (id: number) => {
//     try {
//       deleteTopics(id);

//       navigate('/topicsList');
//     } catch (error: any) {
//       console.error(error);
//     }
//   };

//   if (loading) {
//   }

//   if (error) {
//   }

//   const onSubmit: SubmitHandler<ITopics> = async (data: ITopics) => {
//     try {
//       if (!id) {
//         await createTopics(data);
//         alert('Topico salva com sucesso!');
//       } else {
//         await updateTopics(data);
//         alert('Topico atualizada com sucesso!');
//       }
//       navigate('/topicsList');
//     } catch (err) {
//       console.error('Erro ao salvar a topico!', err);
//     }
//   };

//   return (
//     <Container
//       component="form"
//       onSubmit={handleSubmit(onSubmit)}
//       sx={{
//         mt: 1,
//         padding: 3,
//         bgcolor: '#cfe8fc',
//         width: '50%',
//         borderRadius: '10px',
//         alignItems: 'center',
//         position: 'relative',
//         justifyContent: 'center',
//       }}
//       style={{ marginTop: '10vh' }}
//     >
//       <Typography variant="h6" gutterBottom>
//         Criar topico
//       </Typography>
//       <Grid container spacing={2}>
//         <Grid item xs={12} sm={6}>
//           <Controller
//             name="title"
//             control={control}
//             render={({ field }) => (
//               <TextField
//                 {...field}
//                 id="title"
//                 label="title"
//                 multiline
//                 error={!!errors.title}
//                 helperText={errors.title ? 'Campo obrigatório' : ''}
//               />
//             )}
//             rules={{ required: true }}
//           />
//           <br />
//           <br />

//           <Controller
//             name="content"
//             control={control}
//             render={({ field }) => (
//               <TextField
//                 {...field}
//                 id="outlined-multiline-static"
//                 label="Description"
//                 multiline
//                 rows={4}
//                 defaultValue="Default Value"
//                 error={!!errors.title}
//                 helperText={errors.title ? 'Campo obrigatório' : ''}
//               />
//             )}
//             rules={{ required: true }}
//           />
//         </Grid>
//       </Grid>

//       <Box mt={3}>
//         <Button type="submit" variant="contained" color="primary">
//           Criar topico
//         </Button>
//         <Button
//           type="button"
//           onClick={() => {
//             navigate('/topicsList');
//           }}
//           variant="contained"
//           color="warning"
//           sx={{ marginLeft: '10px' }}
//         >
//           Cancelar
//         </Button>
//         <Button
//           type="button"
//           variant="contained"
//           color="error"
//           onClick={() => {
//             handleDelete(Number(id));
//           }}
//           sx={{ marginLeft: '10px' }}
//         >
//           Excluir
//         </Button>
//       </Box>
//     </Container>
//   );
// };
