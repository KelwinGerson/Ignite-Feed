import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'
import './global.css';

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl : 'https://avatars.githubusercontent.com/u/83376362?v=4',
      name: 'Kelwin Santos',
      role: 'Web Development'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'kelwin.dev/projetos'},
    ],
    publishedAt: new Date('2022-09-26 17:30:00')
  },
  {
    id: 2,
    author: {
      avatarUrl : 'https://avatars.githubusercontent.com/u/28549527?v=4',
      name: 'Rogério V. Bonfim',
      role: 'Cood. TI'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'kelwin.dev/projetos'},
    ],
    publishedAt: new Date('2022-09-10 17:30:00')
  },
];

// iteração → repetir
export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}> 
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

