import  { prisma }  from '../../../lib/prisma';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth from 'next-auth';
import { options } from './options';

const handler = NextAuth(options);

export { handler as GET, handler as POST };