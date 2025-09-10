"use server";


import bcrypt from "bcrypt";
import dbConnect from "@/lib/dbConnect";


import { collectionNamesObj } from "@/lib/dbConnect";

export const loginUser = async (payload) => {
	const { email, password } = payload;
	// dbConnect should be awaited and return a collection
	const userCollection = await dbConnect(collectionNamesObj.userCollection);
	const user = await userCollection.findOne({ email });
	if (!user) return null;

	// bcrypt.compare(plain, hash)
	const isPasswordValid = await bcrypt.compare(password, user.password);
	if (!isPasswordValid) return null;

	// Return only safe user fields for NextAuth session
	return {
		id: user._id.toString(),
		name: user.name || user.email,
		email: user.email,
		// add more fields if needed
	};
};