import { SafeAreaView, ScrollView, useWindowDimensions, View } from 'react-native'
import { createAtlasSupportSDK } from '@atlasinc/react-native-sdk'
import { styles } from './styles'

const atlasSDK = createAtlasSupportSDK({
  appId: '2hxlstzbd5',
  onError: (err) => console.error(err)
})

const unsubscribe = atlasSDK.watchAtlasSupportStats(( { conversations } ) => {
  const unreadTotal = conversations.reduce((total, c) => total + c.unread, 0)
  console.warn(`Total unread conversations = ${unreadTotal}`)
})

const Demo = () => {
  const { height: windowHeight } = useWindowDimensions()
  console.log(`window height = ${windowHeight}`)

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <atlasSDK.AtlasSupportWidget
          style={{ 
            flex: 1
          }}
        />
    </SafeAreaView>
  )
}

export default Demo
