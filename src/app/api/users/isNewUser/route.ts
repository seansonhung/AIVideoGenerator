import { db } from '../../../../db';
import { Users } from '../../../../db/schema';
import { eq } from 'drizzle-orm';

export async function POST(req: Request) {
  const { user } = await req.json();  // Read the JSON body from the client

  if (!user || !user.primaryEmailAddress?.emailAddress) {
    return new Response(
      JSON.stringify({ error: 'User or email is missing' }),
      { status: 400 }
    );
  }

  const email = user.primaryEmailAddress.emailAddress;

  try {
    // Check if the user already exists based on the email
    const result = await db.select().from(Users).where(eq(Users.email, email));

    // If the user doesn't exist, insert the user into the database
    if (result.length === 0) {
      await db.insert(Users).values({
        name: user.fullName ?? '',
        email: email,
        imageUrl: user.imageUrl ?? '',
      });

      return new Response(
        JSON.stringify({ message: 'User created successfully' }),
        { status: 201 }
      );
    } else {
      return new Response(
        JSON.stringify({ message: 'User already exists' }),
        { status: 200 }
      );
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Error checking/creating user' }),
      { status: 500 }
    );
  }
}
