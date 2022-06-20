import Header from "./Header";
import Head from "next/head";

const Layout = ({ children }) => {

    return (
        <>
            <Head>
                <title> Filx Webside</title>
                <link className='object-contain' rel="icon" href="/logo.png" />
            </Head>
            <Header />
            {children}
        </>
    );
}

export default Layout;