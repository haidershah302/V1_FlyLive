<template>
    <div>

        <Subheader from="/">
            <div slot="heading" class="h-full w-ful flex flex-col justify-center">
                <h1 class="text-center">Profile</h1>
            </div>
        </Subheader>

        <div class="h-12"></div>

        <!--    Profile Column Start    -->

        <div class="bg-base-content pt-5 mb-5 text-base-100 w-full shadow-2xl shadow-primary/20">

            <div class="flex w-full gap-4 px-5 mb-6">

                <Avatar
                    :frameSrc="authUser.frame.src"
                    :profileSrc="authUser.profile_picture"
                    :frameBorder="authUser.frame.bdr_box"
                    :frameSize="authUser.frame.size"
                    url="/profile/view"
                    class="relative w-28"
                />

                <div>

                    <NuxtLink to="/profile" class="font-bold text-lg block">User Name</NuxtLink>

                    <UniqueId>
                        123456
                    </UniqueId>

                    <div class="flex gap-4 font-mono font-bold text-center">
                        <Badge badge="/assets/badges/3.png" class="badge-primary shadow-primary/40 shadow"/>
                        <Badge badge="/assets/badges/2.png" class="badge-info shadow-info/40 shadow"/>
                    </div>

                </div>

            </div>

            <div class="flex justify-between gap-2 px-2 font-bold">
                <div class="text-center">
                    <p>4</p>
                    <p>Follow</p>
                </div>
                <div class="text-center">
                    <p>4</p>
                    <p>Fans</p>
                </div>
                <div class="text-center">
                    <p>4</p>
                    <p>Gifts Received</p>
                </div>
                <div class="text-center">
                    <p>4</p>
                    <p>Gifts Sent</p>
                </div>
                <div class="text-center">
                    <p>4</p>
                    <p>Visits</p>
                </div>
            </div>

        </div>

        <!--    Profile Column Start    -->

        <SectionTitle class="mb-4">
            CP Relationship
        </SectionTitle>

        <div class="px-4">
            <img class="rounded-box shadow-lg shadow-primary/30 border-2 border-primary"
                 src="/assets/events/cp_event/cp_banner.png" alt="">
        </div>

        <div class="carousel carousel-center rounded-box max-w-md space-x-4 p-4 mb-4">

            <div class="carousel-item w-4/12">
                <img src="/assets/events/cp_event/small_banner.png" alt=""
                     class="rounded-box shadow-lg shadow-primary/30 border-2 border-primary h-full w-80" />
            </div>

            <div class="carousel-item w-4/12">
                <img src="/assets/events/cp_event/small_banner.png" alt=""
                     class="rounded-box shadow-lg shadow-primary/30 border-2 border-primary h-full w-80" />
            </div>

            <div class="carousel-item w-4/12">
                <img src="/assets/events/cp_event/small_banner.png" alt=""
                     class="rounded-box shadow-lg shadow-primary/30 border-2 border-primary h-full w-80" />
            </div>

            <div class="carousel-item w-4/12">
                <img src="/assets/events/cp_event/small_banner.png" alt=""
                     class="rounded-box shadow-lg shadow-primary/30 border-2 border-primary h-full w-80" />
            </div>

            <div class="carousel-item w-4/12">
                <img src="/assets/events/cp_event/small_banner.png" alt=""
                     class="rounded-box shadow-lg shadow-primary/30 border-2 border-primary h-full w-80" />
            </div>

        </div>

        <slot />



    </div>
</template>
<script setup lang="ts">
import UniqueId from "~/components/uniqueId.vue";
import Badge from "~/components/badge.vue";

const authUser = {
    id: 1,
    name: 'User Name',
    profile_picture: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    frame: {
        src: '/assets/frames/3.png',
        bdr_box: 25,
        size: 110,
    },
    room: {
        id: '123456',
        name: 'Haseeb Room',
        total_gift_interactions: 1123,
        active_users: 3211,
        allowed_seats: 15,
        theme: {
            background_image: 'assets/backgrounds/6.jpg',
            frame: {
                src: 'assets/frames/0.png',
                bdr_box: '20px',
                size: '75px',
            },
            profile_picture: 'assets/room/seat.png',
            color: '#5EE635FF',
            textColor: '#ffffff',
        },
        members: [
            {
                id: 1,
                name: 'User Name',
                profile_picture: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
                room: {
                    room_id: '123456',
                },
                frame: {
                    src: 'assets/frames/6.png',
                    bdr_box: 15,
                    size: '90px',
                },
                interaction: {
                    likes: 4,
                    gifts_received: 8
                }
            },
            {
                id: 2,
                name: 'User Name',
                profile_picture: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
                room: {
                    room_id: '123456',
                },
                frame: {
                    src: 'assets/frames/4.png',
                    bdr_box: 15,
                    size: '90px',
                }
            }
        ],
    },
}
</script>
