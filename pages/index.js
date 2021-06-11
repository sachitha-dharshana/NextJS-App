import Head from 'next/head'
import Card from '../components/home/card/card'

export default function Home(props) {
  return (
    <div>

      <Head>
        <title>NextJS App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div>
        {props.data.map(photo => (
          <Card photo={photo} />
        ))}
      </div>

    </div>
  )
}
