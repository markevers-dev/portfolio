"use server";

import { Post } from "bsky-react-post";
import Link from "next/link";
import { getThemeFromCookies } from "utils/getThemeFromCookie";

const fetchBskyPosts = async () => {
  const response = await fetch(
    "https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=markevers-dev.bsky.social",
  );
  const data = await response.json();
  return data.feed;
};

export const BskyFeed = async () => {
  const bskyPosts = await fetchBskyPosts();
  const theme = await getThemeFromCookies();

  return (
    <div data-theme={theme} className="flex flex-col space-y-2 md:space-y-4">
      <Link
        href="https://bsky.app/profile/markevers-dev.bsky.social"
        target="_blank"
        className="text-xl font-bold tracking-widest text-sky-600 underline dark:text-sky-500"
      >
        Bluesky Feed
      </Link>
      <div className="flex flex-col">
        {bskyPosts.length > 0 ? (
          bskyPosts
            .filter(
              ({ post }) => post.author.handle === process.env.BSKY_HANDLE,
            )
            .map(({ post: { uri, author, cid } }, index) => (
              //   <Post
              //     key={cid}
              //     handle={author.handle}
              //     id={uri.split("/").pop()}
              //   />
              //   <iframe
              //     src={`https://bsky.app/profile/markevers-dev.bsky.social/post/${uri.split("/").pop()}`}
              //     key={cid}
              //   />
              <>
                <blockquote
                  class="bluesky-embed"
                  data-bluesky-uri="at://did:plc:fi2g6gj6jtqyzedr6bwtqkti/app.bsky.feed.post/3li2yuzoa3s2v"
                  data-bluesky-cid="bafyreib6j56rvvjpqyhtmvinzk4kled6u44f4jeu5to34bj6g3b4n7wapq"
                  key={cid}
                >
                  <p lang="en">
                    Recently, my first ever production-ready website was put
                    online: lermoos.tv! 🏔 It&#x27;s a small website where you
                    can easily see webcams and other information about the
                    #TirolerZugspitzArena. There&#x27;s still things I have to
                    do to it, but I&#x27;m pretty proud of how it has turned
                    out! 💪
                    <br />
                    <br />
                    <a href="https://bsky.app/profile/did:plc:fi2g6gj6jtqyzedr6bwtqkti/post/3li2yuzoa3s2v?ref_src=embed">
                      [image or embed]
                    </a>
                  </p>
                  &mdash; Mark Evers (
                  <a href="https://bsky.app/profile/did:plc:fi2g6gj6jtqyzedr6bwtqkti?ref_src=embed">
                    @markevers-dev.bsky.social
                  </a>
                  ){" "}
                  <a href="https://bsky.app/profile/did:plc:fi2g6gj6jtqyzedr6bwtqkti/post/3li2yuzoa3s2v?ref_src=embed">
                    Feb 13, 2025 at 16:28
                  </a>
                </blockquote>
                <script
                  async
                  src="https://embed.bsky.app/static/embed.js"
                  charset="utf-8"
                ></script>
              </>
            ))
        ) : (
          <p>
            Well, this is supposed to be where my Bluesky posts are, but... I
            guess something went wrong! Sorry!
          </p>
        )}
      </div>
    </div>
  );
};
