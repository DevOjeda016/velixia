"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { DefaultViewBuilderCore } from "drizzle-orm/gel-core";
import { useState } from "react";

const Home = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    authClient.signUp.email({
      email,
      password,
      name,
    }, {
      onSuccess: () => {
        window.alert('SingUp successful');
      },
      onError: () => {
        window.alert('Something went wrong');
      }
    })
  }
  
  const handleSignIn = () => {
    authClient.signIn.email({
      email,
      password,
    }, {
      onSuccess: () => {
        window.alert('SingIn successful');
      },
      onError: () => {
        window.alert('Something went wrong');
      }
    }
  )}

  const { data: session } = authClient.useSession()

  return (
    <div className="w-full flex justify-center">
      {
        session
          ? <div className="flex flex-col items-center">
            <p>Loggin as  {session.user.name}</p>
            <Button onClick={() => authClient.signOut()}>Log out</Button>
          </div>
          :
          <div className="flex  w-full flex-col max-w-md gap-8 justify-center">
            <div className="flex  w-full flex-col max-w-md gap-4 justify-center">
              <Input autoComplete="name" type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
              <Input autoComplete="email" type="email" placeholder="example@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              <Input placeholder="password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
              <Button onClick={handleSignUp}>Create user</Button>
            </div>
            <div className="flex  w-full flex-col max-w-md gap-4 justify-center">
              <Input autoComplete="email" type="email" placeholder="example@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              <Input placeholder="password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
              <Button onClick={handleSignIn}>Log in</Button>
            </div>
          </div>
      }
    </div>
  )
}

export default Home;
