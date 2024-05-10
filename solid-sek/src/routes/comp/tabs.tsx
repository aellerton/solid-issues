import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"

export default function Comp() {
  return (
    <main class="mx-auto text-gray-700 p-4 flex flex-col pad-4 items-center">
      <Tabs defaultValue="account" class="w-[400px]">
        <TabsList class="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Account Tab</TabsContent>
        <TabsContent value="password">Password Tab</TabsContent>
      </Tabs>
    </main>
  )
}
