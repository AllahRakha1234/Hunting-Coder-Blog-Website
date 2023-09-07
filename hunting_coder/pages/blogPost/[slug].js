import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from "@/styles/BlogPost.module.css";
import * as fs from "fs"

const Slug = (props) => {

    const [blog, setBlog] = useState(props.blog);

    // FUNCITON TO EXECUTE INNER HTML
    function createMarkup(content) {
        return { __html: content }
    }



    // FETCHING DATA FROM BACKEND (FOR STATIC RENDERING)

    // const router = useRouter();
    // Router.isReady ===> USE TO CHECK IF ROUTER IS READY THEN THE CONTENT SHOULD BE RENDEREDA
    // useEffect(() => {
    //     if (!router.isReady) return;
    //     const { slug } = router.query;
    //     // fetch(`http://localhost:3000/api/getblog/${slug}`).then((data) => {
    //     fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((data) => {
    //         return data.json();
    //     }).then((parsedData) => {
    //         setBlog(parsedData);
    //     })

    // }, [router.isReady])


    // RENDERING CODE

    return (
        <>
            <main className={`${styles.main}`}>
                <h1 className={styles.customFontH1}>
                    {blog && blog.title}
                </h1>
                <h3 className={styles.customFontH3}>
                    {/* {blog && blog.content} */}
                    {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
                </h3>
                <h4 className={styles.customFontH4}>
                    Author: {blog && blog.author}
                </h4>
            </main>
        </>
    )
}



// TO MAKE SERVER SIDE REQUESTS ==> MAKING HTML CONTENT AVAILABLE IN PAGE RESOURCE CONTENT FOR SEO

// export async function getServerSideProps(context) {
//     let slug = context.query.slug;
//     let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
//     let blog = await data.json();
//     console.log("Query: ", slug);
//     console.log("Blog: ", blog);
//     return {
//         props: { blog }
//     }
// }

// TO MAKE STATIC SIDE REQUESTS ==> MAKING HTML CONTENT AVAILABLE IN PAGE RESOURCE CONTENT FOR SEO

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: "how-to-learn-java" } },
            { params: { slug: "how-to-learn-javascript" } },
            { params: { slug: "how-to-learn-nextjs" } },
            { params: { slug: "how-to-learn-python" } },
        ],
        fallback: true // false or blocking
    }
}


export async function getStaticProps(context) {
    const { slug } = context.params;
    let blog = await fs.promises.readFile(`blogsdata/${slug}.json`, 'utf-8');
    return {
        props: { blog: JSON.parse(blog) }
    }
}

export default Slug;

