import * as React from 'react'
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function about({ data }) {
    const description = data.allMarkdownRemark.edges[0].node.html;
    const title = data.allMarkdownRemark.edges[0].node.frontmatter.title;

    return (
        <Layout>
            <Seo title="About Me" />
            <div className="lg:my-12 lg:mx-28 lg:px-16 grid lg:grid-cols-4 gap-4 items-start justify-center">
                <div className="ml-6 mr-4 mt-3 mb-1 flex flex-col items-start">
                    <h2 className="text-2xl my-1">Software Developer</h2>
                    <h1 className="text-lightText dark:text-darkText text-4xl my-1">Andrew Guo</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" className="py-1 h-36 w-36" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 7H7v6h6V7z" />
                        <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                    </svg>
                    <div className="my-3 bg-lightPrimary text-lightSecondary dark:bg-darkPrimary dark:text-darkSecondary flex p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className='px-1'>Ottawa, Canada</span>
                    </div>
                </div>
                <div className="flex items-center md:h-full col-span-3 text-lightText dark:text-darkText my-4 mx-2 px-4">
                    <span className="py-6">
                        <h1 className="mb-3 text-3xl text-lightPrimary dark:text-darkPrimary text-bold">{title}</h1>
                        <span className="text-lg"><div
                            dangerouslySetInnerHTML={{ __html: description }}
                        /></span> {/*I like to live dangerously :-)*/}
                    </span>
                </div>
                <div>
                    <h1 className="text-4xl ml-6 mr-4 my-3">My Skills</h1>
                </div>
                <div className="col-span-3 grid grid-cols-3 items-center bg-lightPrimary dark:bg-lightSecondary py-8 px-0.5 rounded-2xl drop-shadow-2xl my-4 mx-6">
                    <div className="flex justify-center p-1">
                        {/*C Logo*/}
                        <svg className="h-28" viewBox="0 0 128 128">
                            <path fill="#659AD3" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"></path><path fill="#03599C" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"></path><path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"></path>
                        </svg>
                    </div>
                    <div className="flex justify-center p-1">
                        {/*C++ Logo*/}
                        <svg className="h-28" viewBox="0 0 128 128">
                            <path fill="#D26383" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"></path><path fill="#9C033A" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"></path><path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"></path><path d="M82.1 61.8h5.2v-5.3h4.4v5.3H97v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4zm18.5 0h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4z" fill="#fff"></path>
                        </svg>
                    </div>
                    <div className="flex justify-center p-1">
                        {/*Python Logo*/}
                        <svg className="h-28" viewBox="0 0 128 128">
                            <linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#5A9FD4"></stop><stop offset="1" stopColor="#306998"></stop></linearGradient><linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#FFD43B"></stop><stop offset="1" stopColor="#FFE873"></stop></linearGradient><path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)"></path><path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)"></path><radialGradient id="python-original-c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#B8B8B8" stopOpacity=".498"></stop><stop offset="1" stopColor="#7F7F7F" stopOpacity="0"></stop></radialGradient><path opacity=".444" fill="url(#python-original-c)" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"></path>
                        </svg>
                    </div>
                    <div className="flex justify-center p-1">
                        {/*Rust Logo*/}
                        <svg className="h-32" viewBox="0 0 128 128">
                            <path d="M62.271 10.88c-.189.11-.982 1.248-1.763 2.529-1.96 3.217-1.982 3.219-4.615.448-1.713-1.802-2.127-2.132-2.679-2.128-.359.002-.812.124-1.008.271-.195.147-.748 1.317-1.228 2.6-1.099 2.939-1.152 3.034-1.761 3.151-.375.071-1.097-.331-2.828-1.574-1.278-.919-2.532-1.67-2.786-1.67-1.054 0-1.351.576-1.853 3.593-.638 3.836-.616 3.823-4.074 2.252-1.396-.633-2.72-1.152-2.943-1.152-.223 0-.646.24-.939.533-.532.533-.533.535-.388 3.468l.146 2.936-.555.297c-.492.263-.831.231-3.009-.284-2.843-.671-3.443-.653-4.019.122l-.421.566.565 2.421c.31 1.331.609 2.613.665 2.848.055.234-.04.609-.212.832-.284.367-.586.4-3.217.36-4.453-.07-4.706.312-2.866 4.328.585 1.275 1.064 2.433 1.064 2.572 0 .734-.585 1.001-3.098 1.411-1.406.229-2.628.417-2.716.417-.088 0-.352.192-.586.426-.765.765-.548 1.483 1.187 3.932 2.161 3.05 2.157 3.061-1.413 4.427-4.06 1.553-4.142 1.936-1.051 4.868 2.879 2.73 2.882 2.69-.377 4.739-2.469 1.551-2.507 1.588-2.57 2.429-.076 1.023-.058 1.041 2.89 2.842 2.915 1.78 2.915 1.834.054 4.541-3.077 2.91-2.982 3.335 1.081 4.868 3.55 1.339 3.555 1.355 1.39 4.405-1.227 1.729-1.618 2.449-1.618 2.983 0 .999.52 1.254 3.627 1.776 2.617.441 3.2.7 3.2 1.422 0 .148-.48 1.316-1.067 2.594-1.826 3.977-1.618 4.308 2.704 4.308 4.025 0 3.918-.123 3.051 3.507-.654 2.736-.664 3.26-.072 3.851.453.454 1.307.403 3.978-.236 2.04-.487 2.398-.521 2.871-.268l.54.289-.146 2.935c-.145 2.934-.144 2.936.388 3.469.293.293.722.533.952.533.23 0 1.554-.516 2.943-1.147 3.447-1.565 3.425-1.578 4.061 2.246.504 3.031.798 3.594 1.874 3.594.267 0 1.494-.72 2.728-1.6 2.167-1.546 2.729-1.788 3.306-1.421.149.094.727 1.364 1.284 2.822.819 2.144 1.119 2.702 1.575 2.92.868.416 1.405.082 3.445-2.14 2.463-2.683 2.564-2.67 4.575.589 2.221 3.598 2.796 3.59 5.073-.073 1.962-3.156 1.939-3.154 4.591-.384 1.761 1.838 2.136 2.131 2.73 2.131.379 0 .832-.142 1.005-.316.174-.174.75-1.459 1.28-2.855.53-1.397 1.079-2.613 1.221-2.703.561-.357 1.142-.106 3.306 1.43 1.274.905 2.473 1.6 2.758 1.6 1.058 0 1.44-.751 1.88-3.703.376-2.517.452-2.758.947-3.009.487-.247.779-.164 3.063.873 1.389.63 2.713 1.146 2.943 1.146.23 0 .666-.247.967-.549l.549-.548-.151-2.815c-.144-2.688-.131-2.832.298-3.22.441-.399.486-.397 2.952.166 2.986.682 3.543.7 4.104.139.548-.548.542-.668-.208-3.831-.841-3.548-.954-3.422 3.088-3.422 2.755 0 3.062-.039 3.413-.426.586-.648.447-1.39-.732-3.903-.595-1.266-1.078-2.418-1.074-2.56.02-.747.607-1.002 3.32-1.443 1.66-.269 2.902-.581 3.127-.784.754-.681.477-1.567-1.244-3.98-2.157-3.024-2.148-3.053 1.306-4.326 4.136-1.524 4.254-2.032 1.159-4.973-2.867-2.724-2.868-2.709.272-4.637 3.796-2.33 3.802-2.855.067-5.173-3.212-1.993-3.21-1.965-.331-4.699 3.088-2.934 3.004-3.318-1.057-4.871-3.584-1.371-3.595-1.405-1.417-4.394 1.297-1.78 1.618-2.371 1.618-2.981 0-1.066-.478-1.305-3.622-1.813-2.627-.424-3.205-.682-3.205-1.429 0-.142.48-1.285 1.067-2.542 1.149-2.461 1.31-3.446.66-4.035-.349-.316-.817-.361-3.321-.32-2.62.044-2.955.007-3.318-.358-.397-.399-.393-.455.227-3.042.76-3.17.763-3.247.138-3.834-.634-.596-1.03-.586-3.941.099-2.121.5-2.472.533-2.954.275l-.547-.293.151-2.926.152-2.925-.547-.547c-.301-.301-.728-.547-.95-.547-.221 0-1.538.523-2.926 1.161-2.318 1.067-2.567 1.138-3.068.876-.5-.262-.583-.52-1.01-3.127-.493-3.016-.798-3.603-1.869-3.603-.254 0-1.513.755-2.798 1.678-2.11 1.516-2.393 1.659-2.919 1.476-.435-.152-.688-.483-.997-1.306-.229-.606-.667-1.774-.975-2.595-.622-1.656-.969-2.027-1.901-2.027-.52 0-.991.374-2.679 2.127-2.653 2.756-2.663 2.755-4.614-.445-.78-1.279-1.595-2.421-1.812-2.537-.488-.262-1.062-.261-1.511.002m2.418 9.635c2.311 1.645 1.082 5.512-1.752 5.512-2.75 0-4.135-3.313-2.171-5.194 1.108-1.062 2.697-1.191 3.923-.318m-2.906 10.214c1.515.576 2.137.23 5.596-3.104l2.599-2.506 1.1.146c3.45.458 10.312 3.472 14.255 6.261 3.623 2.564 8.438 7.786 10.49 11.377l.439.769-1.944 4.38c-1.07 2.409-1.945 4.633-1.945 4.944 0 .717.47 1.851.923 2.226.191.159 2.006 1.033 4.033 1.942l3.684 1.654.145.937c.187 1.221.212 4.22.042 5.072l-.133.666h-2.103c-2.439 0-2.251-.218-2.383 2.774-.096 2.169-.62 3.368-1.812 4.144-1.942 1.267-5.149 1.037-6.509-.466-.209-.231-.615-1.392-.903-2.581-.841-3.473-1.971-5.423-4.241-7.32-.717-.599-1.303-1.158-1.303-1.243 0-.084.788-.748 1.752-1.473 3.51-2.646 5.528-5.726 5.75-8.777.423-5.819-4.213-11.243-11.109-13.001-1.635-.417-2.333-.43-22.56-.43-11.48 0-20.873-.075-20.873-.166 0-.215 2.551-2.691 4.054-3.933 4.127-3.412 9.488-6.097 15.04-7.531l1.92-.497 2.728 2.766c1.501 1.521 2.972 2.857 3.268 2.97M27.432 48.526c1.257.823 1.772 2.891 1.03 4.134-1.148 1.924-4.056 2.005-5.205.145-1.671-2.702 1.547-6.001 4.175-4.279m74.05.105c3.288 2.005.74 6.937-2.78 5.38-2.35-1.04-2.425-4.252-.127-5.424.959-.489 2.061-.472 2.907.044M37.12 60.907v12.266H26.276l-.43-1.866c-.846-3.675-1.202-7.477-.989-10.591l.149-2.188 3.728-1.672c2.339-1.048 3.843-1.847 4.037-2.144.848-1.293.767-2.217-.423-4.845l-.556-1.227h5.328v12.267m31.22-11.733c2.322.604 3.549 1.833 3.552 3.556.002 1.265-.625 2.059-2.18 2.761-1.101.498-1.276.51-8.219.578l-7.093.068v-7.284h6.355c4.964 0 6.625.07 7.585.321m-2.396 17.602c1.151.32 2.512 1.32 3.21 2.359.733 1.092 1.162 2.512 2.178 7.216.858 3.976 1.41 5.276 2.956 6.968 1.915 2.095 1.471 2.014 11.037 2.014 4.581 0 8.328.073 8.328.163 0 .161-3.155 3.891-3.291 3.891-.039 0-1.687-.345-3.662-.767-5.577-1.191-5.778-1.051-7.058 4.926l-.823 3.84-.743.366c-1.24.612-5.27 1.872-7.359 2.302-3.452.71-7.209.95-10.511.671-5.629-.477-13.083-2.661-13.374-3.92-.062-.267-.437-1.995-.832-3.841-.396-1.846-.877-3.597-1.069-3.891-.923-1.408-1.894-1.495-6.164-.55-1.617.358-3.028.65-3.136.65-.203 0-3.204-3.47-3.204-3.704 0-.073 7.128-.158 15.84-.188l15.84-.054.057-5.627c.04-3.973-.015-5.714-.187-5.92-.192-.232-1.214-.293-4.91-.293H54.4V66.56l5.387.001c2.962.001 5.733.098 6.157.215M41.536 92.365c2.519 1.535 1.311 5.557-1.668 5.554-3.055-.002-4.187-3.987-1.584-5.575.861-.525 2.374-.515 3.252.021m46.126.168c1.235.905 1.646 2.788.881 4.042-2.009 3.295-7.033.676-5.355-2.791.825-1.703 3.018-2.317 4.474-1.251" fillRule="evenodd"></path>
                        </svg>
                    </div>
                    <div className="flex justify-center p-1">
                        {/*JS Logo*/}
                        <svg className="h-24" viewBox="0 0 128 128">
                            <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
                        </svg>
                    </div>
                    <div className="flex justify-center p-1">
                        {/*NodeJs Logo*/}
                        <svg className="h-24" viewBox="0 0 128 128">
                            <path fill="#83CD29" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"></path>
                        </svg>
                    </div>
                    <div className="flex justify-center p-1">
                        {/*React Logo*/}
                        <svg className="h-24" viewBox="0 0 128 128">
                            <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
                        </svg>
                    </div>
                    <div className="flex justify-center p-1">
                        {/*GraphQl Logo*/}
                        <svg className="h-24" viewBox="0 0 128 128">
                            <g fill="#E434AA"><path d="M18.39 96.852l-4.6-2.657L65.04 5.434l4.597 2.656zm0 0"></path><path d="M12.734 87.105H115.23v5.31H12.734zm0 0"></path><path d="M66.031 119.688L14.766 90.09l2.656-4.602 51.266 29.602zm0 0M110.566 42.543L59.301 12.941l2.656-4.597 51.266 29.597zm0 0"></path><path d="M17.434 42.523l-2.657-4.601 51.27-29.598 2.656 4.598zm0 0"></path><path d="M109.621 96.852L58.375 8.09l4.598-2.656 51.25 88.761zm0 0M16.8 34.398h5.313v59.204h-5.312zm0 0"></path><path d="M105.887 34.398h5.312v59.204h-5.312zm0 0"></path><path d="M65.129 117.441l-2.32-4.02 44.586-25.745 2.32 4.02zm0 0"></path><path d="M118.238 95.328c-3.07 5.344-9.918 7.168-15.261 4.098-5.344-3.074-7.168-9.922-4.098-15.266 3.074-5.344 9.922-7.168 15.266-4.097 5.375 3.105 7.199 9.921 4.093 15.265M29.09 43.84c-3.074 5.344-9.922 7.168-15.266 4.097-5.344-3.074-7.168-9.921-4.097-15.265 3.074-5.344 9.921-7.168 15.265-4.098 5.344 3.106 7.168 9.922 4.098 15.266M9.762 95.328c-3.075-5.344-1.25-12.16 4.093-15.266 5.344-3.07 12.16-1.246 15.266 4.098 3.07 5.344 1.246 12.16-4.098 15.266-5.375 3.07-12.191 1.246-15.261-4.098M98.91 43.84c-3.07-5.344-1.246-12.16 4.098-15.266 5.344-3.07 12.16-1.246 15.265 4.098 3.07 5.344 1.247 12.16-4.097 15.266-5.344 3.07-12.192 1.246-15.266-4.098M64 126.656a11.158 11.158 0 01-11.168-11.168A11.158 11.158 0 0164 104.32a11.158 11.158 0 0111.168 11.168c0 6.145-4.992 11.168-11.168 11.168M64 23.68a11.158 11.158 0 01-11.168-11.168A11.158 11.158 0 0164 1.344a11.158 11.158 0 0111.168 11.168A11.158 11.158 0 0164 23.68"></path></g>
                        </svg>
                    </div>
                    <div className="flex justify-center p-1">
                        {/*Express Logo*/}
                        <svg className="h-24" viewBox="0 0 128 128">
                            <path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export const query = graphql`
query markdownQuery {
    allMarkdownRemark(filter: {frontmatter: {slug: {eq: "about-me-description"}}}) {
      edges {
        node {
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`;