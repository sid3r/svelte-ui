// See https://kit.svelte.dev/docs/types#app

import type { PrismaClient } from '@prisma/client';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: {
				id: number;
				email: string;
			};
		}
		// interface PageData {}
		// interface Platform {}
	}
	// eslint-disable-next-line no-var
	var db: PrismaClient;
}

export {};
