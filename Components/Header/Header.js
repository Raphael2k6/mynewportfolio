import React from 'react';
import Head from 'next/head';

const Header = () => {
    return (
        <div>
            <Head>
                <title>Raphael Donanu</title>
                <link rel="icon" href="../public/img/favicon.png" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Raphael Donanu, a front-end engineer skilled in HTML, CSS, Javascript, React and Node.js with experience working on databases" />
                <meta name="author" content="Raphael Donanu" />
                <meta name="keywords" content="web design, front-end web development, software engineer, Javascript engineer, React, Redux, Next.js" />
            </Head>
        </div>
    )
};

export default Header;
