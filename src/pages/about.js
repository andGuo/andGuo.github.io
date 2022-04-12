import * as React from 'react'
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function about() {
    return (
        <Layout>
            <Seo title="About Me" />
            <div className="md:my-12 md:mx-28 px-16 grid md:grid-cols-4 gap-4 items-start justify-center">
                <div className="ml-6 mr-4 my-3 flex flex-col items-start">
                    <h2 className="text-2xl my-1">Software Developer</h2>
                    <h1 className="text-darkText text-4xl my-1">Andrew Guo</h1>
                    <div className="my-3 bg-lightPrimary text-lightSecondary dark:bg-darkPrimary dark:text-darkSecondary flex p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className='px-1'>Ottawa, Canada</span>
                    </div>
                </div>
                <div className="col-span-3 text-lightText dark:text-darkText my-5 mx-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada fames ac turpis. Eget arcu dictum varius duis at consectetur lorem. Diam sollicitudin tempor id eu nisl. Vel pretium lectus quam id. Leo vel fringilla est ullamcorper eget. Morbi quis commodo odio aenean sed. Ut consequat semper viverra nam libero justo. Mattis aliquam faucibus purus in massa tempor nec. Mattis vulputate enim nulla aliquet porttitor. Adipiscing bibendum est ultricies integer quis. Suspendisse sed nisi lacus sed. Parturient montes nascetur ridiculus mus mauris vitae ultricies. Porta non pulvinar neque laoreet suspendisse interdum.
                    Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Aliquam purus sit amet luctus venenatis. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare. Aliquet eget sit amet tellus cras. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. Dis parturient montes nascetur ridiculus mus. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Sed velit dignissim sodales ut eu sem integer vitae. Risus feugiat in ante metus dictum at tempor. Massa tincidunt nunc pulvinar sapien et.
                </div>
                <div>
                    <h1 className="text-4xl ml-6 mr-4 my-3">My Skills</h1>
                </div>
            </div>
        </Layout>
    )
}