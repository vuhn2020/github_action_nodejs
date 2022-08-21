#!/usr/bin/env bash
echo "Shell bash is running!"
#run prisma migrate deploy
echo "prisma migrate is running!"
npx prisma migrate deploy

echo "npm start is running!"
npm start
