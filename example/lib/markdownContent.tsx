import React from "react";

import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const components = {
  code: ({node, className, ...props}: any) => {
    const match = /language-(\w+)/.exec(className || '')
    return match
      ? <SyntaxHighlighter language={match[1]} PreTag="div" style={base16AteliersulphurpoolLight} {...props} />
      : <code className={className} {...props} />
  }
}

export interface Props {
  content: string;
}


export default function MarkdownContent (props: Props) {
  const { content } = props;

  return (
    <ReactMarkdown remarkPlugins={[gfm]} components={components}>{content}</ReactMarkdown>
  );
}