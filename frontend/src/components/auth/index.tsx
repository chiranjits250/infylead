import { GoogleOAuthProvider } from '@react-oauth/google';
import Config from '../../utils/config';
import { GoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import _ from 'lodash';
import { useRouter } from 'next/router';
import Hooks from '@omkar111111/utils/hooks';
import {
  EuiButton,
  EuiFieldText,
  EuiForm,
  EuiFormRow,
  EuiSpacer,
  EuiCard,
  EuiFieldPassword,
  EuiText,
  EuiLink,
} from '@elastic/eui';
import Toast from '@omkar111111/components/Toast';
import FrontendAxios from '../../utils/axios/frontend';
import Api from '../../utils/api';
import Link from 'next/link';
import { pushToHome } from '../../utils/next'


function GoogleAuth() {
  const router = useRouter();

  const validateTokenAndObtainSession = token => {
    return Api.sendGoogleAuthToken(token).then(() => {
      pushToHome(router);
    });
  };

  function showErrorToast() {
    Toast.error('Failed to login to Google. Please try again.');
  }

  function onGoogleLoginFailure(response) {
    console.error(response);
    showErrorToast();
  }

  const onGoogleLoginSuccess = token => {
    validateTokenAndObtainSession(token).catch(onGoogleLoginFailure);
  };

  return (
    <div className="space-x-4 p-4 child-iframe-m-auto">
      <GoogleOAuthProvider clientId={Config.OAUTH_CLIENT_ID}>
        <GoogleLogin
          type="standard"
          theme="outline"
          shape="pill"
          text="continue_with"
          onSuccess={credentialResponse => {
            onGoogleLoginSuccess(credentialResponse.credential);
          }}
          onError={() => {
            showErrorToast();
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
}

function isValidEmail(email: string): boolean {
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPassword(password: string) {
  return password.length >= 8;
}

function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [hasSubmittedOnce, setHasSubmittedOnce] = useState(false);

  const errors = [];
  if (name.length === 0) {
    errors.push('Please enter your name.');
  }

  if (!isValidEmail(email)) {
    errors.push(
      'The email address you entered is not valid. Please enter a valid email address.'
    );
  }

  if (!isValidPassword(password)) {
    errors.push('Password must be at least 8 characters.');
  }

  const isInvalid = errors.length > 0;

  function handleSubmit(e) {
    e.preventDefault();

    setHasSubmittedOnce(true);
    if (!isInvalid) {
      FrontendAxios.post('/auth/sign-up/', {
        name,
        email,
        password,
      }).then(() => {
        Toast.success(
          'Thank you for signing up! An email confirmation has been sent to your inbox.'
        );
      });
    }
  }

  return (
    <div className="page-card-wrapper ">
      <EuiCard title="Sign Up">
        <EuiSpacer />
        <GoogleAuth />
        <EuiText>
          <u>OR</u>
        </EuiText>
        <EuiSpacer />
        <div className="text-left">
          <EuiForm
            isInvalid={hasSubmittedOnce && isInvalid && true}
            error={hasSubmittedOnce && isInvalid && errors}
            component="form"
            onSubmit={handleSubmit}>
            <EuiFormRow label="Name" fullWidth>
              <EuiFieldText
                value={name}
                onChange={e => setName(e.target.value)}
                fullWidth
              />
            </EuiFormRow>
            <EuiFormRow label="Email" fullWidth>
              <EuiFieldText
                value={email}
                onChange={e => setEmail(e.target.value)}
                fullWidth
              />
            </EuiFormRow>
            <EuiFormRow label="Password" fullWidth>
              <EuiFieldPassword
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="dual"
                fullWidth
              />
            </EuiFormRow>
            <EuiSpacer />
            <div className="text-center">
              <EuiButton type="submit" fill>
                Submit
              </EuiButton>
            </div>
            <EuiSpacer />
            <EuiText className="text-center">
              Signing up for a InfyLead account means you agree to the{' '}
              <Link href="/legal/terms/" passHref>
                <EuiLink>Privacy Policy</EuiLink>
              </Link>{' '}
              and{' '}
              <Link href="/legal/terms/" passHref>
                <EuiLink> Terms of Service</EuiLink>
              </Link>
              .
            </EuiText>
            <EuiSpacer />
            <EuiText className="text-center">
              Have an Account?{' '}
              <Link href="/auth/sign-in/" passHref>
                <EuiLink>Sign In</EuiLink>
              </Link>
            </EuiText>
          </EuiForm>
        </div>
      </EuiCard>
    </div>
  );
}

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [hasSubmittedOnce, setHasSubmittedOnce] = useState(false);

  const router = useRouter();

  const errors = [];

  if (!isValidEmail(email)) {
    errors.push(
      'The email address you entered is not valid. Please enter a valid email address.'
    );
  }

  const isInvalid = errors.length > 0;

  function handleSubmit(e) {
    e.preventDefault();
    setHasSubmittedOnce(true);
    if (!isInvalid) {
      FrontendAxios.post('/auth/sign-in/', {
        email,
        password,
      }).then(() => {
        pushToHome(router);
      });
    }
  }

  return (
    <div className="page-card-wrapper ">
      <EuiCard title="Sign In">
        <EuiSpacer />
        <GoogleAuth />
        <EuiText>
          <u>OR</u>
        </EuiText>
        <EuiSpacer />
        <div className="text-left">
          <EuiForm
            isInvalid={hasSubmittedOnce && isInvalid && true}
            error={hasSubmittedOnce && isInvalid && errors}
            component="form"
            onSubmit={handleSubmit}>
            <EuiFormRow label="Email" fullWidth>
              <EuiFieldText
                value={email}
                onChange={e => setEmail(e.target.value)}
                fullWidth
              />
            </EuiFormRow>
            <EuiFormRow label="Password" fullWidth>
              <EuiFieldPassword
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="dual"
                fullWidth
              />
            </EuiFormRow>
            <EuiSpacer />

            <div className="text-center">
              <EuiButton type="submit" fill>
                Submit
              </EuiButton>
            </div>
            <EuiSpacer />
            <div className="flex justify-between">
              <Link href="/auth/sign-up/" passHref>
                <EuiLink>Don't have an account?</EuiLink>
              </Link>
              <Link href="/auth/forgot-password/" passHref>
                <EuiLink>Forgot password?</EuiLink>
              </Link>
            </div>
          </EuiForm>
        </div>
      </EuiCard>
    </div>
  );
}

function SendPasswordResetForm() {
  const [email, setEmail] = useState('');

  const [hasSubmittedOnce, setHasSubmittedOnce] = useState(false);

  const errors = [];

  if (!isValidEmail(email)) {
    errors.push(
      'The email address you entered is not valid. Please enter a valid email address.'
    );
  }

  const isInvalid = errors.length > 0;

  function handleSubmit(e) {
    e.preventDefault();
    setHasSubmittedOnce(true);
    if (!isInvalid) {
      FrontendAxios.post('/auth/reset-password-send/', { email }).then(() => {
        Toast.success(
          'Password reset instructions have been sent to your registered email address. Please check your email to reset your password.'
        );
      });
    }
  }

  return (
    <div className="page-card-wrapper ">
      <EuiCard title="Reset your password">
        <div className="text-left">
          <EuiForm
            isInvalid={hasSubmittedOnce && isInvalid && true}
            error={hasSubmittedOnce && isInvalid && errors}
            component="form"
            onSubmit={handleSubmit}>
            <EuiFormRow label="Email" fullWidth>
              <EuiFieldText
                value={email}
                onChange={e => setEmail(e.target.value)}
                fullWidth
              />
            </EuiFormRow>
            <EuiSpacer />
            <div className="text-center">
              <EuiButton type="submit" fill>
                Submit
              </EuiButton>
            </div>
            <EuiSpacer />
          </EuiForm>
        </div>
      </EuiCard>
    </div>
  );
}

function ResetPasswordForm({ token }: { token: string }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [hasSubmittedOnce, setHasSubmittedOnce] = useState(false);

  const router = useRouter();

  const errors = [];

  if (!isValidPassword(password)) {
    errors.push('Password must be at least 8 characters.');
  }

  if (password !== confirmPassword) {
    errors.push('The password and confirm password fields do not match.');
  }

  const isInvalid = errors.length > 0;

  function handleSubmit(e) {
    e.preventDefault();
    setHasSubmittedOnce(true);
    if (!isInvalid) {
      FrontendAxios.post(`/auth/reset-password-change/${token}/`, {
        password,
      }).then(() => pushToHome(router));
    }
  }

  return (
    <div className="page-card-wrapper ">
      <EuiCard title="Reset your password">
        <div className="text-left">
          <EuiForm
            isInvalid={hasSubmittedOnce && isInvalid && true}
            error={hasSubmittedOnce && isInvalid && errors}
            component="form"
            onSubmit={handleSubmit}>
            <EuiSpacer />
            <EuiFormRow label="Password" fullWidth>
              <EuiFieldPassword
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="dual"
                fullWidth
              />
            </EuiFormRow>
            <EuiSpacer />
            <EuiFormRow label="Confirm Password" fullWidth>
              <EuiFieldPassword
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                type="dual"
                fullWidth
              />
            </EuiFormRow>
            <EuiSpacer />
            <div className="text-center">
              <EuiButton type="submit" fill>
                Submit
              </EuiButton>
            </div>
            <EuiSpacer />
          </EuiForm>
        </div>
      </EuiCard>
    </div>
  );
}

export { SendPasswordResetForm, ResetPasswordForm, SignInForm, SignUpForm };
