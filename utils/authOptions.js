import GithubProvider from 'next-auth/providers/github';
import { supabase } from './connectDB';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
  ],
  callbacks: {
    // Invoked on successful signin
    async signIn({ profile }) {
      // 1. Connect to database
    //   await connectDB();
      // 2. Check if user exists
      const { data, error } = await supabase.from('users').select('*').eq('email', profile.email).single(); 

if (error) {
  console.error('Error checking user:', error);
} else if (data) {
  console.log('User exists:', data);
} else {
  console.log('User does not exist.');
}

      // 3. If not, then add user to database
    //   if (!userExists) {
    //     // Truncate user name if too long
    //     const username = profile.name.slice(0, 20);
    //     await userModel.create({
    //       email: profile.email,
    //       name: username,
    //       profileImage: profile.picture,
    //     });
    //   }
      // 4. Return true to allow sign in
      return true;
    },
  //   // Modifies the session object
    // async session({ session }) {
    //   // 1. Get user from database
    //   const user = await userModel.findOne({ email: session.user.email });
    //   // 2. Assign the user id to the session
    //   session.user.id = user._id.toString();
    // //   3. return session
    //   return session;
    // },
  },
  // secret: process.env.NEXTAUTH_URL,
};