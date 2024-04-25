import ApiService from "@/services/ApiService";
import {SignInResponse} from "@/@types/auth";

export const AuthService = {
  async signIn(email: string, password: string): Promise<SignInResponse> {
    const res = await ApiService.fetchData<{ email: string, password: string }, SignInResponse>({
      url: '/users/sign-in',
      method: 'POST',
      data: {email, password}
    })
    return res.data;
  }
}
