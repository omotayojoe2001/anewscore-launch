import CountdownTimer from '@/components/CountdownTimer';
import EmailSignup from '@/components/EmailSignup';

const Index = () => {
  // Set launch date - adjust this to your desired launch date
  const launchDate = new Date('2024-12-31T23:59:59');

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-8">
      {/* Site Name */}
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
          ANEWSPORTAL
        </h1>
        <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
      </header>

      {/* Main Content */}
      <main className="text-center space-y-16 max-w-6xl mx-auto">
        {/* Countdown Timer */}
        <section className="space-y-8">
          <CountdownTimer 
            targetDate={launchDate}
          />
        </section>

        {/* Message */}
        <section className="space-y-8">
          <p className="text-xl md:text-2xl text-foreground font-medium max-w-2xl mx-auto leading-relaxed">
            OUR COMMUNITY IS LAUNCHING SOON – BE PART OF IT.
          </p>
          
          {/* Email Signup */}
          <EmailSignup />
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 text-center">
        <p className="text-sm text-muted-foreground">
          CONNECT THROUGH STORIES, QUOTES, AND COMMUNITY
        </p>
      </footer>
    </div>
  );
};

export default Index;
