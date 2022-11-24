import Head from "next/head"
import { Fragment } from "react"

import Header from "./Header"

interface LayoutProps {
    headTitle: string | string[] | undefined
    children: any
}

export default function Layout(props: LayoutProps) {
    return (
        <Fragment>
            <Head>
                <title>{ props.headTitle }</title>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
            </Head>

            <Header />

            <div className="p-8">
                { props.children }
            </div>
        </Fragment>
    )
}