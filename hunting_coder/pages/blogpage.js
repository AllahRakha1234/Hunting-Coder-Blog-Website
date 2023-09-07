import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/styles/Blog.module.css";
import * as fs from "fs";
import InfiniteScroll from "react-infinite-scroll-component";
import Links from "../Components/Links";

const Blog = (props) => {
    const [allBlogsData, setAllBlogsData] = useState(props.allblogs);
    const [count, setCount] = useState(2);
    const [isLoading, setIsLoading] = useState(false); // Track loading state

    // Function to toggle loading state
    const toggleLoading = (loading) => {
        setIsLoading(loading);
        document.body.style.overflow = loading ? "hidden" : "auto";
    };

    // FETCHING DATA FROM BACKEND (FOR STATIC RENDERING)

    // useEffect(() => {
    //     fetch("http://localhost:3000/api/blogs").then((data) => {
    //         return data.json();
    //     }).then((parsedData) => { setAllBlogsData(parsedData) })
    // }, [])

    // INFINITE SCROLLBAR CODE
    const fetchMoreData = async () => {
        let d = await fetch(`http://localhost:3000/api/blogs?count=${count + 2}`);
        setCount(count + 2);
        let data = await d.json();
        setAllBlogsData(data);
        toggleLoading(false); // Stop loading
    };

    // RENDERING CODE

    return (
        <>
            {/* FOR BOOTSTRAP LINKS */}
            {/* <Links /> */}

            <div
                style={{
                    height: "5vh",
                    width: "27vw",
                    marginTop: "2vh",
                    marginLeft: "1vw",
                }}
            >
                <div className={styles.badgeBox}>
                    <span className={styles.badge}>Click on Title to see Full Blog!</span>
                </div>
            </div>
            {/* <main className={`${styles.main}`}> */}
            <main
                className={`${styles.main} overflow-hidden ${isLoading ? "hide-scrollbar" : ""
                    }`}
            >
                <InfiniteScroll
                    dataLength={allBlogsData.length} //This is important field to render the next data
                    next={fetchMoreData}
                    hasMore={props.allCount !== allBlogsData.length}
                    loader={
                        <div className={styles.loaderScrollbarBox}>
                            <span className={styles.loaderScrollbar}>Loading...</span>
                        </div>
                    }
                    endMessage={
                        <p className={styles.scrollbarMsg} style={{ textAlign: "center" }}>
                            <b>Yay! You have seen it all ✅✅✅</b>
                        </p>
                    }
                >
                    <div className={styles.blogItems}>
                        <h3 className={styles.customFontH3}>Latest Blogs Of 2023</h3>
                        {/* BLOGS DATA RENDERING LOGIC */}
                        {allBlogsData &&
                            allBlogsData.map((blog, index) => {
                                return (
                                    <div className={styles.blogItem} key={index}>
                                        <Link href={`/blogPost/${blog.slug}`}>
                                            <h4 className={styles.customFontH4}>{blog.title}</h4>
                                        </Link>
                                        <h5 className={styles.customFontH5}>
                                            {blog.content.substring(0, 130)}
                                        </h5>
                                    </div>
                                );
                            })}
                    </div>
                </InfiniteScroll>
            </main>
        </>
    );
};

// TO MAKE SERVER SIDE REQUESTS ==> MAKING HTML CONTENT AVAILABLE IN PAGE RESOURCE CONTENT FOR SEO

// export async function getServerSideProps(context) {

//     let data = await fetch("http://localhost:3000/api/blogs");
//     let allblogs = await data.json();

//     return {
//         props: { allblogs }
//     }
// }

// TO MAKE STATIC SIDE REQUESTS => MAKING HTML CONTENT AVAILABLE IN PAGE RESOURCE CONTENT FOR SEO  ==> HERE
// GETSTATICPATHS IS NOT REQUIRED AS IT IS ADDED ONLY ONCE

export async function getStaticProps(context) {
    let allblogs = [];
    let myfile;
    let data = await fs.promises.readdir("blogsdata");
    let allCount = data.length;
    for (let index = 0; index < 2; index++) {
        const element = data[index];
        myfile = await fs.promises.readFile("blogsdata/" + element, "utf-8");
        allblogs.push(JSON.parse(myfile));
    }
    return {
        props: { allblogs, allCount },
    };
}

export default Blog;
