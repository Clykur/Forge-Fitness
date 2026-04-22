import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";
import { Home } from "@/pages/Home";
import { Classes } from "@/pages/Classes";
import { TrainersPage } from "@/pages/TrainersPage";
import { PricingPage } from "@/pages/PricingPage";
import { ContactPage } from "@/pages/ContactPage";
import { BookingPage } from "@/pages/Booking";
import { BookingStatus } from "@/pages/BookingStatus";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/classes" component={Classes} />
        <Route path="/book/:classId" component={BookingPage} />
        <Route path="/trainers" component={TrainersPage} />
        <Route path="/pricing" component={PricingPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/booking-status" component={BookingStatus} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;