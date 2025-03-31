'use client';

import React, { useEffect, useState } from 'react';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

import { db } from '@/config/firebase';
import dotenv from 'dotenv';

dotenv.config();

interface ViewsProps {
  slug: string;
  autoIncrement: boolean;
}

async function getViews(slug: string) {
  const viewsRef = doc(db, 'views', slug);
  const docSnap = await getDoc(viewsRef);

  if (docSnap.exists()) {
    return docSnap.data().views || 0;
  } else {
    // If document does not exist, initialize it with 0 views
    await setDoc(viewsRef, { views: 0 });
    return 0;
  }
}

async function incrementViews(slug: string) {
  const viewsRef = doc(db, 'views', slug);
  const docSnap = await getDoc(viewsRef);

  if (docSnap.exists()) {
    // Update the existing document
    await updateDoc(viewsRef, {
      views: (docSnap.data().views || 0) + 1,
    });
  } else {
    // Create the document if it does not exist
    await setDoc(viewsRef, { views: 1 });
  }
}

const Views: React.FC<ViewsProps> = ({ slug, autoIncrement }) => {
  const [viewCount, setViewCount] = useState<number | null>(null); // `null` represents loading
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAndIncrementViews = async () => {
      try {
        if (autoIncrement && process.env.NODE_ENV === 'production') {
          await incrementViews(slug);
        }
        const currentViews = await getViews(slug);
        setViewCount(currentViews);
      } catch (error) {
        console.error('Error fetching view count:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAndIncrementViews();
  }, [slug, autoIncrement]);

  return (
    <div className="relative w-fit">
      {loading ? (
        <div className="flex items-center gap-2">
          <div className="w-8 md:w-9 h-4 md:h-5 bg-zinc-300 dark:bg-zinc-800 animate-pulse  rounded"></div>
          <div className="w-3 md:w-4 h-4 md:h-5 bg-zinc-300 dark:bg-zinc-800 animate-pulse rounded"></div>
        </div>
      ) : (
        <p className="!m-0 p-0!">
          <span className="font-bold">Views: </span>
          {viewCount !== null ? viewCount : 'N/A'}
        </p>
      )}
    </div>
  );
};

export default Views;
