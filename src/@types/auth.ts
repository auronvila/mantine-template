export type SignInCredential = {
  email: string;
  password: string;
};

export type ForgotPasswordReq = {
  email: string;
};

export interface SignInResponse {
  id: string;
  fullName: string;
  authority: string[];
  phoneNumber: string;
  email: string;
  expires_in?: number;
  access_token: string;
}

export interface ResponseInfoObject {
  status: 'success' | 'failed';
  error_code?: number;
  message?: string;
}

export type SignUpResponse = SignInResponse;

export type SignUpCredential = {
  name: string;
  username: string;
  password: string;
};
