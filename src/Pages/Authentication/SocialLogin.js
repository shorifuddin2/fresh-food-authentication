import React from 'react';
import { Stack, Button } from 'react-bootstrap';
import useFirebase from './../../hooks/useFirebase';

const SocialLogin = () => {
    const { handleFacebookLogin, handleGithubLogin, handleGoogleLogin } = useFirebase();


    return (
        <Stack className='justify-content-center' direction="horizontal" gap={3}>
            <Button variant="primary" onClick={handleGoogleLogin}>G</Button>{' '}
            <Button variant="primary" onClick={handleGithubLogin}>Git</Button>{' '}
            <Button variant="primary" onClick={handleFacebookLogin}>FB</Button>{' '}

        </Stack>
    );
};

export default SocialLogin;