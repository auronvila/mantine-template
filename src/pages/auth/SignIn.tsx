import React, {useState} from 'react';
import {
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Title, Text,
} from '@mantine/core';
import classes from './SignIn.module.css';
import * as yup from 'yup';
import {useForm, yupResolver} from "@mantine/form";
import useAuth from "@/utils/hooks/useAuth";

export default function SignIn() {
  const [loading, setLoading] = useState<boolean>(false)
  const {signIn} = useAuth()
  const schema = yup.object().shape({
    email: yup
      .string()
      .required('Please enter a email')
      .email('Invalid email'),
    password: yup
      .string()
      .required('Please enter a password')
  });

  const form = useForm({
    initialValues: {
      email: 'admin@test.com',
      password: '12345qwerty',
    },
    validate: yupResolver(schema),
  });

  async function handleSubmit(values: { email: string, password: string }) {
    setLoading(true)
    try {
      const res = await signIn(values)
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <div className={classes.wrapper}>
          <Paper className={classes.form} radius={0} p={30}>
            <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
              Welcome to Mantine Template
            </Title>
            <Text ta="center" mt="md" mb={50}>
              To get more information about the template please check the <a
              href={'https://github.com/auronvila/mantine-template/wiki'}>documentation</a>
            </Text>
            <TextInput {...form.getInputProps('email')} name={'email'} label="Email address" withAsterisk
                       placeholder="hello@gmail.com" size="md"/>
            <PasswordInput {...form.getInputProps('password')} name={'password'} label="Password"
                           placeholder="Your password" mt="md" size="md"/>
            <Button loading={loading} type={'submit'} fullWidth mt="xl" size="md">
              Login
            </Button>
            {/*<Text ta="center" mt="md">*/}
            {/*  Don&apos;t have an account?{' '}*/}
            {/*  <Anchor<'a'> href="#" fw={700} onClick={(event) => event.preventDefault()}>*/}
            {/*    Register*/}
            {/*  </Anchor>*/}
            {/*</Text>*/}
          </Paper>
        </div>
      </form>
    </div>
  );
}
