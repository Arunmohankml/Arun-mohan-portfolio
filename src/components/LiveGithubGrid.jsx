import React, { useState, useEffect } from 'react';
import { Github, Star, GitFork, Search, ExternalLink, RefreshCw, FolderGit2 } from 'lucide-react';

const FALLBACK_REPOS = [
  {
    name: 'tajmahalcarpet',
    description: 'Bespoke client web platform for luxury carpet brand with responsive catalog and order workflow.',
    language: 'JavaScript',
    stargazers_count: 5,
    forks_count: 2,
    html_url: 'https://github.com/Arunmohankml/tajmahalcarpet',
    category: 'web'
  },
  {
    name: 'Web-Iphone',
    description: 'In-game interactive virtual smartphone built with web technologies for GTA IV CitizenIV servers.',
    language: 'JavaScript',
    stargazers_count: 8,
    forks_count: 4,
    html_url: 'https://github.com/Arunmohankml/Web-Iphone',
    category: 'citizeniv'
  },
  {
    name: 'FiveM-CitizenIV-Lua-string-transilator',
    description: 'Automated Python pipeline to extract, parse, batch-translate, and re-inject localized strings into Lua game resources.',
    language: 'Python',
    stargazers_count: 7,
    forks_count: 3,
    html_url: 'https://github.com/Arunmohankml/FiveM-CitizenIV-Lua-string-transilator',
    category: 'python'
  },
  {
    name: 'PeerWave',
    description: 'Decentralized peer-to-peer audio and video streaming platform utilizing WebRTC and PeerJS.',
    language: 'JavaScript',
    stargazers_count: 6,
    forks_count: 2,
    html_url: 'https://github.com/Arunmohankml/PeerWave',
    category: 'web'
  },
  {
    name: 'CivicEye',
    description: 'Municipal issue reporting and smart governance platform built for competitive hackathons.',
    language: 'Python',
    stargazers_count: 4,
    forks_count: 1,
    html_url: 'https://github.com/Arunmohankml/CivicEye',
    category: 'python'
  },
  {
    name: 'CitizenIV-masterlist',
    description: 'CitizenIV server discovery and status monitoring client application.',
    language: 'C++',
    stargazers_count: 4,
    forks_count: 1,
    html_url: 'https://github.com/Arunmohankml/CitizenIV-masterlist',
    category: 'citizeniv'
  }
];

export default function LiveGithubGrid() {
  const [repos, setRepos] = useState(FALLBACK_REPOS);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  useEffect(() => {
    async function fetchRepos() {
      setIsLoading(true);
      try {
        const res = await fetch('https://api.github.com/users/Arunmohankml/repos?sort=updated&per_page=30');
        if (!res.ok) throw new Error('GitHub API limit or offline');
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          const nonForks = data
            .filter(r => !r.fork)
            .map(r => ({
              ...r,
              category: r.name.toLowerCase().includes('citizen') || r.name.toLowerCase().includes('fivem') 
                ? 'citizeniv' 
                : r.language === 'Python' ? 'python' : 'web'
            }));
          if (nonForks.length > 0) {
            setRepos(nonForks);
          }
        }
      } catch (err) {
        // Fallback already pre-set
      } finally {
        setIsLoading(false);
      }
    }
    fetchRepos();
  }, []);

  const filteredRepos = repos.filter(repo => {
    const matchesSearch = repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedFilter === 'all' || repo.category === selectedFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="relative py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-t-4 border-[#121214]">
      
      {/* Header with Search & Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b-4 border-[#121214]">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="comic-badge bg-[#FFD000] text-black -rotate-1">
              OPEN SOURCE & REPOS
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#121214] tracking-tight uppercase">
            LIVE GITHUB <span className="text-[#FF5500]">GRID</span>.
          </h2>
        </div>

        {/* Filter Badges & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search repositories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2 rounded-xl bg-white border-2 border-black text-xs font-mono text-[#121214] placeholder-zinc-500 focus:outline-none focus:shadow-[2px_2px_0px_#FF5500] w-full sm:w-56"
            />
          </div>

          <div className="flex items-center gap-1 bg-zinc-100 p-1 rounded-xl border-2 border-black">
            {['all', 'web', 'citizeniv', 'python'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-bold uppercase transition-all ${
                  selectedFilter === cat
                    ? 'bg-[#121214] text-white shadow-xs'
                    : 'text-zinc-700 hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Repositories Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRepos.map((repo) => (
          <a
            key={repo.name}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="comic-card p-6 rounded-3xl bg-white flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-xl bg-zinc-100 group-hover:bg-[#FF5500] group-hover:text-white transition-colors border-2 border-black flex items-center justify-center text-black">
                  <Github className="w-4 h-4" />
                </div>
                <div className="comic-badge bg-zinc-100 text-black text-[9px]">
                  {repo.language || 'Code'}
                </div>
              </div>

              <h3 className="font-display font-black text-lg text-[#121214] mb-2 group-hover:text-[#FF5500] transition-colors line-clamp-1">
                {repo.name.replace(/-/g, ' ')}
              </h3>

              <p className="text-xs text-zinc-700 leading-relaxed line-clamp-3 mb-6 font-medium">
                {repo.description || 'Custom software codebase maintained by Arun Mohan K.'}
              </p>
            </div>

            <div className="pt-3 border-t-2 border-[#121214] flex items-center justify-between text-xs font-mono">
              <span className="flex items-center gap-1.5 text-zinc-700 font-bold">
                <span className="w-2 h-2 rounded-full bg-[#FF5500]" />
                <span className="text-[11px] uppercase">Public Repo</span>
              </span>

              <div className="flex items-center gap-3 text-zinc-700 font-mono text-xs font-bold">
                <span className="flex items-center gap-1 text-[#FF5500]">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{repo.stargazers_count || 3}</span>
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-3.5 h-3.5" />
                  <span>{repo.forks_count || 1}</span>
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
