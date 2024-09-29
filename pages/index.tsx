import { useState } from 'react'
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/src/components/ui/tabs"
import { ChevronDown, ChevronRight, Menu, Search, User, X, MessageSquare, ThumbsUp } from "lucide-react"
import Link from 'next/link'
import Image from 'next/image'

export default function Component() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const popularSpots = [
        { name: '大台北', image: '/placeholder.svg?height=100&width=100' },
        { name: '桃園市', image: '/placeholder.svg?height=100&width=100' },
        { name: '新竹市', image: '/placeholder.svg?height=100&width=100' },
        { name: '臺中市', image: '/placeholder.svg?height=100&width=100' },
        { name: '臺南市', image: '/placeholder.svg?height=100&width=100' },
        { name: '高雄市', image: '/placeholder.svg?height=100&width=100' },
    ]

    const posts = [
        {
            id: 1,
            user: { name: '泰', avatar: '/placeholder.svg?height=40&width=40' },
            timestamp: '2024-09-29 16:06',
            content: '哪裡好\n臺南火車站出來步行半小時就到臺南棒球場 濕威偷蛋...',
            image: '/placeholder.svg?height=200&width=200',
            recommendations: 0,
            comments: 0,
        },
        {
            id: 2,
            user: { name: 'Amy', avatar: '/placeholder.svg?height=40&width=40' },
            timestamp: '2024-09-29 15:44',
            content: '苗栗也有可❤️的網美咖啡廳\n忙完一些私事 天氣也沒那麼熱了 所以我出門啦 隱藏在...',
            image: '/placeholder.svg?height=200&width=200',
            recommendations: 0,
            comments: 0,
        },
        {
            id: 3,
            user: { name: 'K文*說走就走🏔️🌄🏕️🍖🥩🍗', avatar: '/placeholder.svg?height=40&width=40' },
            timestamp: '2024-09-29 15:31',
            content: '午後☁️晴空萬里的軍艦岩👍\n360度視野（圖為室內 觀音山的方向）下午，晴空萬...',
            image: '/placeholder.svg?height=200&width=200',
            recommendations: 0,
            comments: 0,
        },
    ]

    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <Link href="/" className="flex-shrink-0">
                                <img className="h-8 w-auto" src="/placeholder.svg?height=32&width=32" alt="Eatgether" />
                            </Link>
                            <div className="hidden md:block ml-10 flex items-baseline space-x-4">
                                <div className="relative">
                                    <Input
                                        type="text"
                                        placeholder="找聚會 運動、美食、唱歌..."
                                        className="w-64 pl-10"
                                    />
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                </div>
                            </div>
                        </div>
                        <nav className="hidden md:flex space-x-4">
                            <Link href="#" className="text-gray-600 hover:text-orange-500">聚會活動</Link>
                            <Link href="#" className="text-gray-600 hover:text-orange-500">貼文</Link>
                            <div className="relative group">
                                <Link href="#" className="text-gray-600 hover:text-orange-500 flex items-center">
                                    新手上路
                                    <ChevronDown className="ml-1 h-4 w-4" />
                                </Link>
                            </div>
                            <Link href="#" className="text-gray-600 hover:text-orange-500">交友見證</Link>
                            <div className="relative group">
                                <Link href="#" className="text-gray-600 hover:text-orange-500 flex items-center">
                                    關於我們
                                    <ChevronDown className="ml-1 h-4 w-4" />
                                </Link>
                            </div>
                        </nav>
                        <div className="hidden md:flex items-center">
                            <Button variant="ghost" className="text-gray-600 hover:text-orange-500">
                                <User className="mr-2 h-4 w-4" />
                                註冊 / 登入
                            </Button>
                        </div>
                        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X /> : <Menu />}
                        </Button>
                    </div>
                </div>
            </header>

            {isMenuOpen && (
                <div className="md:hidden bg-white p-4 shadow-md">
                    <nav className="flex flex-col space-y-2">
                        <Input
                            type="text"
                            placeholder="找聚會 運動、美食、唱歌..."
                            className="mb-2"
                        />
                        <Link href="#" className="text-gray-600 hover:text-orange-500">聚會活動</Link>
                        <Link href="#" className="text-gray-600 hover:text-orange-500">貼文</Link>
                        <Link href="#" className="text-gray-600 hover:text-orange-500">新手上路</Link>
                        <Link href="#" className="text-gray-600 hover:text-orange-500">交友見證</Link>
                        <Link href="#" className="text-gray-600 hover:text-orange-500">關於我們</Link>
                        <Button variant="outline" className="w-full">註冊 / 登入</Button>
                    </nav>
                </div>
            )}

            <main className="flex-grow">
                <section className="py-12 px-4 bg-gradient-to-r from-orange-100 to-yellow-100">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6 text-center">熱門聚會地點</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                            {popularSpots.map((spot, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <Image
                                        src={spot.image}
                                        alt={spot.name}
                                        width={100}
                                        height={100}
                                        className="rounded-full"
                                    />
                                    <p className="mt-2 text-center">{spot.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-12 px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6 text-center">最新貼文</h2>
                        <Tabs defaultValue="latest" className="w-full">
                            <TabsList className="grid w-full grid-cols-6 mb-4">
                                <TabsTrigger value="latest">最新</TabsTrigger>
                                <TabsTrigger value="popular">熱門</TabsTrigger>
                                <TabsTrigger value="private">私密</TabsTrigger>
                                <TabsTrigger value="friends">好友</TabsTrigger>
                                <TabsTrigger value="following">追蹤</TabsTrigger>
                                <TabsTrigger value="saved">收藏</TabsTrigger>
                            </TabsList>
                            <TabsContent value="latest">
                                <div className="space-y-6">
                                    {posts.map((post) => (
                                        <div key={post.id} className="bg-white rounded-lg shadow-md p-4">
                                            <div className="flex items-center mb-2">
                                                <Image
                                                    src={post.user.avatar}
                                                    alt={post.user.name}
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full mr-2"
                                                />
                                                <div>
                                                    <p className="font-semibold">{post.user.name}</p>
                                                    <p className="text-sm text-gray-500">{post.timestamp}</p>
                                                </div>
                                            </div>
                                            <p className="mb-2">{post.content}</p>
                                            <Image
                                                src={post.image}
                                                alt="Post image"
                                                width={200}
                                                height={200}
                                                className="rounded-lg mb-2"
                                            />
                                            <div className="flex items-center text-sm text-gray-500">
                                                <ThumbsUp className="w-4 h-4 mr-1" />
                                                <span className="mr-4">{post.recommendations} 推薦</span>
                                                <MessageSquare className="w-4 h-4 mr-1" />
                                                <span>{post.comments} 留言</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 flex justify-center">
                                    <Button variant="outline" className="mr-2">
                                        <ChevronRight className="w-4 h-4 mr-2" />
                                        更多熱門貼文
                                    </Button>
                                    <div className="flex items-center space-x-2">
                                        <span>1 / 5</span>
                                        <Button variant="outline" size="icon">
                                            <ChevronRight className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-100 py-8 px-4">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-600 mb-4 md:mb-0">&copy; 2023 Eatgether. All rights reserved.</p>
                    <nav className="flex space-x-4">
                        <Link href="#" className="text-gray-600 hover:text-orange-500">Terms</Link>
                        <Link href="#" className="text-gray-600 hover:text-orange-500">Privacy</Link>
                        <Link href="#" className="text-gray-600 hover:text-orange-500">Contact</Link>
                    </nav>
                </div>
            </footer>
        </div>
    )
}