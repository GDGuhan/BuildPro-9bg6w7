import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HardHat, Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getCurrentUser, setUserRole } from '@/lib/auth';
import { UserRole } from '@/types';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Materials', href: '/materials' },
  { name: 'Timeline', href: '/timeline' },
  { name: 'Reports', href: '/reports' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const user = getCurrentUser();

  const handleRoleChange = (role: UserRole) => {
    setUserRole(role);
    window.location.reload();
  };

  return (
    <header className="bg-construction-black text-white sticky top-0 z-50 border-b-4 border-construction-yellow">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-construction-yellow p-2 rounded">
              <HardHat className="h-6 w-6 text-construction-black" />
            </div>
            <span className="text-xl font-bold group-hover:text-construction-yellow transition-colors">
              BuildPro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-semibold transition-colors hover:text-construction-yellow ${
                  location.pathname === item.href
                    ? 'text-construction-yellow'
                    : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* User Role Dropdown */}
          <div className="hidden md:flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="bg-transparent border-construction-yellow text-white hover:bg-construction-yellow hover:text-construction-black">
                  <User className="h-4 w-4 mr-2" />
                  {user?.role || 'Admin'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white">
                <DropdownMenuLabel>Switch Role</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleRoleChange('Admin')}>
                  Admin
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleRoleChange('Worker')}>
                  Worker
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleRoleChange('Client')}>
                  Client
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              className="text-white hover:bg-construction-yellow hover:text-construction-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-construction-yellow/20">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-semibold px-2 py-2 rounded transition-colors ${
                    location.pathname === item.href
                      ? 'bg-construction-yellow text-construction-black'
                      : 'text-white hover:bg-construction-yellow/10'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-construction-yellow/20 pt-4 mt-2">
                <p className="text-xs text-gray-400 mb-2 px-2">Switch Role</p>
                {(['Admin', 'Worker', 'Client'] as UserRole[]).map((role) => (
                  <button
                    key={role}
                    onClick={() => {
                      handleRoleChange(role);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left text-sm font-medium px-2 py-2 rounded transition-colors ${
                      user?.role === role
                        ? 'bg-construction-yellow text-construction-black'
                        : 'text-white hover:bg-construction-yellow/10'
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
