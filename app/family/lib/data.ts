import { sql } from '@vercel/postgres';
import {
    Member, Relationship
} from './model/definitions';

import {unstable_noStore} from "next/cache";

export async function fetchMembers() {
    // Add noStore() here to prevent the response from being cached.
    // This is equivalent to in fetch(..., {cache: 'no-store'}).

    unstable_noStore()

    try {
        // Artificially delay a response for demo purposes.
        // Don't do this in production :)

        console.log('Getting all members');
        // await new Promise((resolve) => setTimeout(resolve, 3000));

        const data = await sql<Member>`SELECT * FROM members`;


         console.log('Data fetch completed after 3 seconds.');
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}

export async function fetchRelationships() {
    // Add noStore() here to prevent the response from being cached.
    // This is equivalent to in fetch(..., {cache: 'no-store'}).

    unstable_noStore()

    try {
        // Artificially delay a response for demo purposes.
        // Don't do this in production :)

        console.log('Getting all relationships');
        // await new Promise((resolve) => setTimeout(resolve, 3000));

        const data = await sql<Relationship>`SELECT * FROM relationships`;


        console.log('Data fetch completed after 3 seconds.');
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}

export async function insertMember(member) {
    unstable_noStore()

    try {
        // Artificially delay a response for demo purposes.
        // Don't do this in production :)

        console.log('Getting all relationships');
        // await new Promise((resolve) => setTimeout(resolve, 3000));

        const data = await sql<Relationship>`INSERT INTO members values('${member.name}', '${member.fullname}')`;

        console.log('Data inserted');
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}
