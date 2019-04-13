import '../styles/styles.scss'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Layout from '../components/Layout/Layout'

const Index =  ({shows}) => (
   <>
   <Layout></Layout>
    <h1>BATMAN TV SHOWS</h1>
    <ul>{shows.map(show => (<li key={show.id}>
        <Link as={'/p/${show.id}'} href={'/post?id={show.id'}>
        <a>{show.name}</a>
        </Link>
    </li>) )
    }</ul>
  </>
)
Index.getInitialProps =  async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()
    console.log('it works', data)
    console.log(`Show data fetched. Count: ${data.length}`)

    return {
      shows: data.map(entry => entry.show)
    }  
}
export default Index;