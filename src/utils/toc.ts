export type Heading = {
    tag: string
    content: string
    children: Heading[]
    level?: number
}

export function createTableOfContents(html: string): Heading[] {
    // Regular expression to match <h1>, <h2>, and <h3> tags and their content
    const regex = /<(h[1-3])>(.*?)<\/\1>/g

    const headings: Heading[] = []
    let match: RegExpExecArray | null

    // A stack to keep track of the current hierarchy of headings
    const stack: Heading[] = []

    while ((match = regex.exec(html)) !== null) {
        const tag = match[1]
        const content = match[2]
        const newHeading: Heading = { tag, content, children: [], level: parseInt(tag[1]) }

        // Determine the position of the new heading in the hierarchy
        let parent: Heading | undefined
        while (stack.length > 0) {
            const last = stack[stack.length - 1]
            if (last.tag < tag) {
                parent = last
                break
            }
            stack.pop()
        }

        if (parent) {
            parent.children.push(newHeading)
        } else {
            headings.push(newHeading)
        }

        stack.push(newHeading)
    }

    return headings
}