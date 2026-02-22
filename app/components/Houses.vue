<template>
    <div class="flex gap-4">

        <Card>
            <CardHeader>
                <CardTitle class="flex items-center gap-2">
                    <span>Studenthuset</span>
                    <Badge variant="outline">öppet</Badge>
                </CardTitle>
            </CardHeader>
            <CardContent class="flex flex-col gap-4">
                <div class="flex items-begin gap-4">
                    <div class="flex flex-col gap-2">
                        <div class="flex items-center gap-2">
                            <Studenthuset class="size-16 text-muted-foreground" />
                            <div class="flex flex-col">
                                <span class="text-sm text-muted-foreground"><b>23:00</b></span>
                                <span class="text-sm text-muted-foreground"><b>12.5</b> platser</span>
                                <span class="text-sm text-muted-foreground"><b>22°C</b></span>
                            </div>
                        </div>
                        <Button variant="outline" size="sm">
                            <a href="https://liu.se/studenthuset">Läs mer</a>
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle class="flex items-center gap-2">
                    <span>C-huset</span>
                    <Badge variant="outline">öppet</Badge>
                </CardTitle>
            </CardHeader>
            <CardContent class="flex flex-col gap-4">
                <div class="flex items-begin gap-4">
                    <div class="flex flex-col gap-2">
                        <div class="flex items-center gap-2">
                            <Chuset class="size-16 text-muted-foreground" />
                            <div class="flex flex-col">
                                <span class="text-sm text-muted-foreground"><b>22:00</b></span>
                                <span class="text-sm text-muted-foreground"><b>45</b> platser </span>
                                <span class="text-sm text-muted-foreground"><b>21°C</b> </span>
                            </div>
                        </div>
                        <Button variant="outline" size="sm">
                            <a href="https://www.akademiskahus.se/campus--fastigheter/linkoping/campus-valla-linkoping/buildings/E0007003">Läs mer</a>
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
</template>