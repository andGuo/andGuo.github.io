import * as React from 'react'
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function about() {
    return (
        <Layout>
            <Seo title="About Me" />
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-5xl text-lightText dark:text-darkText">Under Construction 🏗</h2>
                <Link to="/" className="py-5 text-3xl underline hover:text-lightSecondary">Back to home</Link>
            </div>
        </Layout>
    )
}