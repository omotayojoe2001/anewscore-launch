import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const EmailSignup = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!firstName.trim() || !email || !email.includes('@')) {
      return;
    }

    setIsLoading(true);
    
    // Simulate API call - no popup notifications
    setTimeout(() => {
      setFirstName('');
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="flex-1 bg-background border-border text-foreground placeholder:text-muted-foreground"
          disabled={isLoading}
        />
        <Input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-background border-border text-foreground placeholder:text-muted-foreground"
          disabled={isLoading}
        />
      </div>
      <Button 
        type="submit" 
        disabled={isLoading}
        className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-2 transition-colors w-full"
      >
        {isLoading ? 'NOTIFYING...' : 'NOTIFY ME'}
      </Button>
    </form>
  );
};

export default EmailSignup;