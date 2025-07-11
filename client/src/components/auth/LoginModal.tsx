'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { signIn } from 'next-auth/react';

function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-1.5c-.83 0-1.5.67-1.5 1.5V12h3l-.5 3h-2.5v6.8c4.56-.93 8-4.96 8-9.8z" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    );
  }

export default function LoginModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Iniciar Sesión</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gray-800 border-gray-700 text-gray-700">
        <DialogHeader>
          <DialogTitle>Iniciar Sesión</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button
            variant="outline"
            className="w-full justify-center gap-2 bg-gray-700 hover:bg-gray-600"
            onClick={() => signIn('google')}>
            <GoogleIcon className="h-5 w-5" />
            Iniciar Sesión con Google
          </Button>
          <Button variant="outline" className="w-full justify-center gap-2 bg-gray-700 hover:bg-gray-600">
            <FacebookIcon className="h-5 w-5" />
            Iniciar Sesión con Facebook
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}