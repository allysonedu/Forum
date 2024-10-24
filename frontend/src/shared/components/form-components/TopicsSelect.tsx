import React from 'react';
import { Controller, Control } from 'react-hook-form';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@mui/material';
import { ITopics } from '../../dtos/ITopics';
import { useAuth } from '../../hooks/auth';

interface TopicsSelectProps {
  control: Control<any>; // O controle vindo do useForm
  title: string; // Nome do campo
  topics: ITopics[]; // A lista de assistidos que será exibida no select
  error?: boolean; // Se existe erro no campo
  errorMessage?: string; // Mensagem de erro personalizada
}

export const TopicsSelect: React.FC<TopicsSelectProps> = ({
  control,
  title,
  topics,
  error,
  errorMessage,
}) => {
  const { user } = useAuth();

  const defaultTopics = user.topic_id || '';

  return (
    <Controller
      name={title}
      control={control}
      render={({ field }) => (
        <FormControl fullWidth variant="outlined" error={error}>
          <InputLabel>Topics</InputLabel>
          <Select
            {...field}
            value={field.value || defaultTopics} // Garantindo que o valor inicial seja uma string vazia se não houver valor
            label="Topics"
          >
            {topics.map(item => (
              <MenuItem key={item.id} value={item.id}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{errorMessage}</FormHelperText>
        </FormControl>
      )}
      rules={{ required: true }} // Validação: obrigatório
    />
  );
};
