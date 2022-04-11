import * as React from 'react'
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function about() {
    return (
        <Layout>
            <Seo title="About Me" />
            <div className="flex flex-col items-center justify-center">
                <div>
                    <h2>Software Developer</h2>
                    <h1>Andrew Guo</h1>
                </div>
                <div className="text-lightText dark:text-darkText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada fames ac turpis. Eget arcu dictum varius duis at consectetur lorem. Diam sollicitudin tempor id eu nisl. Vel pretium lectus quam id. Leo vel fringilla est ullamcorper eget. Morbi quis commodo odio aenean sed. Ut consequat semper viverra nam libero justo. Mattis aliquam faucibus purus in massa tempor nec. Mattis vulputate enim nulla aliquet porttitor. Adipiscing bibendum est ultricies integer quis. Suspendisse sed nisi lacus sed. Parturient montes nascetur ridiculus mus mauris vitae ultricies. Porta non pulvinar neque laoreet suspendisse interdum.

Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Aliquam purus sit amet luctus venenatis. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare. Aliquet eget sit amet tellus cras. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. Dis parturient montes nascetur ridiculus mus. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Sed velit dignissim sodales ut eu sem integer vitae. Risus feugiat in ante metus dictum at tempor. Massa tincidunt nunc pulvinar sapien et.
                </div>
            </div>
        </Layout>
    )
}