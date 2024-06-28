import Icon from "@/components/icon"
import Image from "next/image"

function Video(props){
    const {thumbnail, title, views, channel, date_posted} = props

    return (
        <div>
            <div className="relative overflow-hidden w-full h-[14.8vw] rounded-[12px] bg-white">
                <Image src={`/images/thumbnails/${thumbnail}`} fill alt={title}/>
            </div>

            <div className="flex gap-x-3 py-3">
                <div className="w-9 h-9 rounded-full bg-white flex-shrink-0 overflow-hidden relative">
                    <Image src={`/images/channel-logos/${channel.logo}`} fill alt={channel.name}/>
                </div>
                <div>
                    <p className="text-white font-bold break-words">{title}</p>
                    <p className="text-[#AAAAAA] text-sm">{channel.name}</p>
                    <p className="text-[#AAAAAA] text-sm">{views} views &bull; {date_posted}</p>
                </div>
                <Icon icon="More"/>
            </div>
        </div>
    )
}

export default function Videos(){

    const videos = [
        {
            thumbnail: "1.jpg",
            title: "Non stop Swami Samarth Bhaktigeete | Swami Samarth Songs",
            views: "1M",
            date_posted: "4 days ago",
            channel: {
                logo: "1.jpg",
                name: "Jai Jai Swami Samarth",
                is_verified: true
            }
        },
        {
            thumbnail: "1.jpg",
            title: "Non stop Swami Samarth Bhaktigeete | Swami Samarth Songs",
            views: "1M",
            date_posted: "4 days ago",
            channel: {
                logo: "1.jpg",
                name: "Jai Jai Swami Samarth",
                is_verified: true
            }
        },
        {
            thumbnail: "1.jpg",
            title: "Non stop Swami Samarth Bhaktigeete | Swami Samarth Songs",
            views: "1M",
            date_posted: "4 days ago",
            channel: {
                logo: "1.jpg",
                name: "Jai Jai Swami Samarth",
                is_verified: true
            }
        },
        {
            thumbnail: "1.jpg",
            title: "Non stop Swami Samarth Bhaktigeete | Swami Samarth Songs",
            views: "1M",
            date_posted: "4 days ago",
            channel: {
                logo: "1.jpg",
                name: "Jai Jai Swami Samarth",
                is_verified: true
            }
        },
        {
            thumbnail: "1.jpg",
            title: "Non stop Swami Samarth Bhaktigeete | Swami Samarth Songs",
            views: "1M",
            date_posted: "4 days ago",
            channel: {
                logo: "1.jpg",
                name: "Jai Jai Swami Samarth",
                is_verified: true
            }
        },
        {
            thumbnail: "1.jpg",
            title: "Non stop Swami Samarth Bhaktigeete | Swami Samarth Songs",
            views: "1M",
            date_posted: "4 days ago",
            channel: {
                logo: "1.jpg",
                name: "Jai Jai Swami Samarth",
                is_verified: true
            }
        },
        {
            thumbnail: "1.jpg",
            title: "Non stop Swami Samarth Bhaktigeete | Swami Samarth Songs",
            views: "1M",
            date_posted: "4 days ago",
            channel: {
                logo: "1.jpg",
                name: "Jai Jai Swami Samarth",
                is_verified: true
            }
        },
        {
            thumbnail: "1.jpg",
            title: "Non stop Swami Samarth Bhaktigeete | Swami Samarth Songs",
            views: "1M",
            date_posted: "4 days ago",
            channel: {
                logo: "1.jpg",
                name: "Jai Jai Swami Samarth",
                is_verified: true
            }
        },
        {
            thumbnail: "1.jpg",
            title: "Non stop Swami Samarth Bhaktigeete | Swami Samarth Songs",
            views: "1M",
            date_posted: "4 days ago",
            channel: {
                logo: "1.jpg",
                name: "Jai Jai Swami Samarth",
                is_verified: true
            }
        }
    ]
    return (
        <div className="mt-9">
            <div className="grid grid-cols-3 3xl:grid-cols-4 gap-x-4 gap-y-[52px]">
                {
                    videos.map((item, key) => <Video {...item} key={key}/>)
                }
            </div>
        </div>
    )
}