/* eslint-disable no-unused-vars */
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export enum Login {
  email = "email",
  senha = "senha",
}

const LoginForm = () => {
  const schema = yup.object().shape({
    [Login.email]: yup.string().email().trim().required(),
    [Login.senha]: yup.string().min(8).trim().required(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      [Login.email]: "",
      [Login.senha]: "",
      customError: "",
    },
  });

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(JSON.stringify(values, null, 2));
        resolve(null);
      }, 1000);
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.email}>
        <FormLabel htmlFor="E-mail">E-mail</FormLabel>
        <Input id="email" placeholder="E-mail" {...register("email")} />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.senha}>
        <FormLabel htmlFor="E-mail">Senha</FormLabel>
        <Input id="senha" placeholder="Senha" {...register("senha")} />
        <FormErrorMessage>
          {errors.senha && errors.senha.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
};
export default LoginForm;
