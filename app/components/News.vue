<script setup lang="ts">
import { toast } from 'vue-sonner'
import { AlertCircleIcon, ArrowUpRight, BadgeAlertIcon } from 'lucide-vue-next';


const news = [
    {
        title: "Corson - ny beräknad tid!",
        description: "Corson försenas igen och väntas stå klart först sommaren 2032",
        imageUrl: "https://liu.se/dfsmedia/dd35e243dfb7406993c1815aaf88a675/105568-50118",
        updatedAt: "08:45"
    },
    {
        title: "Studentsidan får en facelift",
        description: "Lisam läggs ner efter kritik: ersätts av nya plattformen LiuFlow™",
        imageUrl: "https://i.imgur.com/CqRl92v.png",
        updatedAt: "igår 14:25"
    },
    {
        title: "WebbU slår till: köper OpenAI",
        description: "WebbU köper OpenAI för 5 000 miljarder: planerar datacenter mellan Blå Havet och Baljan.",
        imageUrl: "https://i.imgur.com/7ARTqdZ.png",
        updatedAt: "onsdag 11:10",
        note: "kan påverka corson-projektet"
    }
]
</script>

<template>
    <div class="flex gap-4 overflow-x-auto overflow-y-visible scrollbar-hide">
        <Card class="w-80 shrink-0" v-for="(item, index) in news" :key="index">
            <CardHeader>
                <CardTitle>{{ item.title }}</CardTitle>
                <CardDescription>
                    {{ item.description }}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <img :src="item.imageUrl" alt="Corson" class="rounded-md aspect-4/3 object-cover" />
            </CardContent>
            <CardFooter class="flex flex-col gap-2 mt-auto">
                <div class="flex items-end justify-between w-full">
                    <div class="flex flex-col gap-1">
                        <Badge v-if="item.note" variant="secondary">
                            <AlertCircleIcon />
                            {{ item.note }}
                        </Badge>
                        <span class="text-sm text-muted-foreground">
                            uppdaterat {{ item.updatedAt }}
                        </span>
                    </div>
                    <Button variant="outline" size="icon">
                        <ArrowUpRight />
                    </Button>
                </div>
            </CardFooter>
        </Card>
        <Card class="w-80 shrink-0 flex flex-col justify-between border-dashed" variant="secondary">
            <CardHeader class="items-center text-center">
                <CardTitle>Lås upp fler nyheter</CardTitle>
                <CardDescription>
                    Läs <span class="font-semibold text-foreground">4 hp</span> till för att få tillgång till fler
                    uppdateringar.
                </CardDescription>
            </CardHeader>

            <CardContent class="text-center text-sm text-muted-foreground">
                Uppgradera din studentstatus för att fortsätta hålla dig uppdaterad om Corson-projektet och andra
                viktiga nyheter.
            </CardContent>

            <CardFooter class="flex flex-col gap-2">
                <Button class="w-full">
                    <a href="https://ladok.se/">Läs fler kurser</a>
                </Button>
                <Button variant="ghost" class="w-full text-muted-foreground" @click="() => toast('Ojdå, det var inte bra', {
                    description: 'Du har kommit upp i skuldgränsen för CSN, betala av dina lån innan du kan låsa upp fler nyheter!',
                })">
                    Få tillgång direkt från 49kr/mån
                </Button>
            </CardFooter>
        </Card>
    </div>
</template>
