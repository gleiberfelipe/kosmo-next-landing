import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] border-none justify-end">
        <SelectValue placeholder="English" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>          
          <SelectItem value="diamond">English</SelectItem>
          <SelectItem value="banana">Portuguese</SelectItem>
          <SelectItem value="blueberry">French</SelectItem>
          <SelectItem value="grapes">Spanish</SelectItem>
          <SelectItem value="pineapple">Chinese</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
