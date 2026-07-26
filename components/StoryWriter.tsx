'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Textarea } from './ui/textarea';

function StoryWriter() {
  const [story, setStory] = useState<string>('');
  const [pages, setPages] = useState<number>();
  const [progress, setProgress] = useState();
  const [runStarted, setRunStarted] = useState<boolean>(false);
  const [runFinished, setRunFinished] = useState<boolean | null>(null);

  return (
    <div className='flex flex-col container px-7'>
      <section className='flex-1 flex flex-col border border-purple-300 rounded-md p-10 space-y-2'>
        <Textarea
          value={story}
          onChange={(e) => setStory(e.target.value)}
          className='flex-1 text-black'
          placeholder='Write a story about a robot and a human who become friends...'
        />

        <Select onValueChange={(value) => setPages(parseInt(value))}>
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='How many pages should the story be?' />
          </SelectTrigger>

          <SelectContent>
            {Array.from({ length: 10 }, (_, i) => (
              <SelectItem key={i} value={String(i + 1)}>
                {i + 1}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button disabled={!story || !pages} className='w-full' size='lg'>
          Generate Story
        </Button>
      </section>

      <section className='flex-1 pb-5 mt-5'>
        <div className='flex flex-col-reverse w-full space-y-2 bg-gray-800 rounded-md text-gray-200 font-mono p-10 h-96 overflow-y-auto'>
          <div>
            {runFinished === null && (
              <>
                <p className='animate-pulse mr-5'>
                  Im waiting for you to Generate a story above...
                </p>
              </>
            )}

            <span className='mr-5'>{'>>'}</span>
            {progress}
          </div>
        </div>
      </section>
    </div>
  );
}

export default StoryWriter;
