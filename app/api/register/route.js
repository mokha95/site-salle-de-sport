import bcrypt from "bcrypt";
import prisma from "../../db";
import { NextResponse } from "next/server";

// inscription
// fichier qui nous permet de discuter avec le serveur de next
export async function POST(request) {
  const body = await request.json();
  let { firstname, lastname, email, password, phone } = body.data;

  if (!firstname || !lastname || !email || !password || !phone) {
    return NextResponse("prénom, nom, email, password  ou téléphone manquant", {
      status: 400,
    });
  }

  const exist = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (exist) {
    return new NextResponse("User already exists", { status: 400 });
  }

  password = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      lastname,
      firstname,
      email,
      password,
      phone,
    },
  });

  return NextResponse.json(user);
}
