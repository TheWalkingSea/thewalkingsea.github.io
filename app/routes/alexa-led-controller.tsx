import { Link } from "react-router";
import { ArrowLeft, Github, Zap, Lightbulb, Cpu, Cloud } from "lucide-react";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function AlexaLedController() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-blue-500/30">
        <div className="container mx-auto px-6 py-4">
          <Link
            to="/"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-amber-400 font-starwars drop-shadow-[0_0_15px_rgba(251,191,36,0.7)]">
              Alexa Integrated LED Controller
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Voice-activated LED control system powered by AWS and Alexa Skills Kit
            </p>
            <div className="mt-6">
              <a
                href="https://github.com/TheWalkingSea/custom-door-system"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
            </div>
          </div>

          {/* Project Overview */}
          <Card className="mb-8 bg-black/60 border-blue-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-300">Project Overview</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                This project combines Amazon Web Services, the Alexa Skills Kit, and Raspberry Pi
                to create a seamless voice-controlled lighting system. Users can control their LED
                strips using natural voice commands through any Alexa-enabled device.
              </p>
              <p>
                The system leverages AWS Lambda for serverless computing, enabling real-time
                communication between Alexa and the Raspberry Pi controller without the need for
                dedicated server infrastructure.
              </p>
            </CardContent>
          </Card>

          {/* Key Features */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-black/60 border-blue-500/30 backdrop-blur-sm hover:border-blue-400/60 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-amber-400" />
                  <CardTitle className="text-xl text-blue-300">Voice Control</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-gray-400">
                Natural language commands processed through Alexa Skills Kit for intuitive LED
                control
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-blue-500/30 backdrop-blur-sm hover:border-blue-400/60 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Cloud className="w-6 h-6 text-blue-400" />
                  <CardTitle className="text-xl text-blue-300">AWS Integration</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-gray-400">
                Serverless architecture using AWS Lambda for scalable, reliable cloud processing
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-blue-500/30 backdrop-blur-sm hover:border-blue-400/60 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Cpu className="w-6 h-6 text-green-400" />
                  <CardTitle className="text-xl text-blue-300">Raspberry Pi</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-gray-400">
                Python-based controller running on Raspberry Pi for precise LED management
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-blue-500/30 backdrop-blur-sm hover:border-blue-400/60 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-yellow-400" />
                  <CardTitle className="text-xl text-blue-300">Custom Effects</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-gray-400">
                Support for multiple lighting modes, colors, and dynamic effects
              </CardContent>
            </Card>
          </div>

          {/* The Problem */}
          <Card className="bg-black/60 border-blue-500/30 backdrop-blur-sm mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-300">The Problem</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">Ever since I came to Georgia Tech, I have been building individual smart-home projects all around my room: including but not limited to projects—LED strips, a custom dashboard, an immersive surround-sound setup—but each system operated in its own isolated bubble. Nothing communicated with anything else. Switching lighting modes meant opening one app, adjusting audio required another, and automating both at once was nearly impossible without writing separate scripts for each device. I wanted a unified, effortless way to control everything—one that didn’t rely on clunky interfaces or inconsistent third-party apps. The real challenge was creating a single, seamless control layer that could bridge all my devices without adding more complexity.</p>
            </CardContent>
          </Card>
          {/* The Process */}
            <Card className="bg-black/60 border-blue-500/30 backdrop-blur-sm mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-300">The Process</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">So, I sought out to integrate all my systems with the Alexa Skills Kit in order to create a unified, fully-integrated smart-home system. <br/><br/> I decided that for the scope of this project, I would create a small smart-home system that would turn on an LED when I prompted Alexa. So, I wrote out the initial wiring diagram as follows:</p>
              <div
                className="bg-white h-125 mx-auto"
                style={{
                  maskImage: "url('/images/circuit_diagram.svg')",
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                  aspectRatio: "1",
                  width: "fit-content"
                }}
              />
              <p className="text-gray-400 mt-4">Now, I tested this with the following code:</p>
              <SyntaxHighlighter
                language="python"
                style={vscDarkPlus}
                className="rounded-lg mt-4"
                customStyle={{
                  background: '#1a1a1a',
                  padding: '1.5rem',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(59, 130, 246, 0.3)'
                }}
              >
{`import RPi.GPIO as GPIO
import time

def turn_on_led(pin=0):
    """
    Turns on an LED connected to the specified GPIO pin.
    Default pin is GPIO0.
    """
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(pin, GPIO.OUT)

    # Turn on the LED
    GPIO.output(pin, GPIO.HIGH)

    print(f"LED on GPIO{pin} is now ON")

turn_on_led()`}
              </SyntaxHighlighter>
              <p className="text-gray-400 mt-8">Now that I had the LED working, I implemented the voice activation system with my Alexa. I used the Alexa Skill Kit for this which I setup to run a Cloud Function when it hears a specific action. I was then able to run this Cloud Function to add to a Queue using AWS Simple Queue Service. The Raspberry Pi would then periodically poll the Queue for any data, and if there was an event, it would retrieve it an execute the function! The architecture looks like as follows:</p>
              <img src="/images/AWS_arch.svg" alt="AWS Architecture" className="mt-4 mx-auto" />

              <p className="text-gray-400 mt-8">After implementing the function with my Raspberry Pi, I was able to create the final circuit which looks like as follows:</p>
              <img src="/images/circuit.jpg" alt="AWS Architecture" className="mt-4 mx-auto h-200" />
            </CardContent>
          </Card>
          {/* The Outcome */}
          <Card className="bg-black/60 border-blue-500/30 backdrop-blur-sm mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-300">The Outcome</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-400">
                The project was a success! I was able to create a fully functional voice-controlled LED system that responds to Alexa commands in real-time. By saying "Alexa, turn on the lights," the system would process the command through AWS Lambda, queue it in SQS, and the Raspberry Pi would execute the GPIO command to illuminate the LED.
              </p>
              <p className="text-gray-400">
                This proof-of-concept demonstrated the viability of using cloud services to bridge voice assistants with local IoT devices. The system's modular architecture means it can easily be extended to control additional devices beyond just LEDs—including other smart home components like motors, sensors, and displays.
              </p>
              <p className="text-gray-400">
                The project validated my initial vision of creating a unified control layer for all my smart home devices, and it laid the groundwork for future expansions into a more comprehensive home automation system.
              </p>
            </CardContent>
          </Card>

          {/* Challenges & Solutions */}
          <Card className="bg-black/60 border-blue-500/30 backdrop-blur-sm mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-300">Challenges & Solutions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-2">AWS Service Integration</h3>
                <p className="text-gray-400">
                  Initially, I struggled with configuring the AWS Lambda function to properly communicate with SQS. The IAM permissions and service connections required careful setup. I solved this by thoroughly reading AWS documentation and implementing proper error handling to debug connection issues.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-2">Alexa Skill Configuration</h3>
                <p className="text-gray-400">
                  Configuring the Alexa Skill Kit to recognize custom voice commands required understanding the intent schema and utterance patterns. I iterated through multiple versions of the skill configuration until the natural language processing accurately captured my commands.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-2">Polling vs. Push Notifications</h3>
                <p className="text-gray-400">
                  The Raspberry Pi needed to check for new commands from SQS. I initially considered using webhooks but realized that polling was more straightforward for this setup. I optimized the polling interval to balance responsiveness with resource efficiency.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* ECE Skills Gained */}
          <Card className="bg-black/60 border-blue-500/30 backdrop-blur-sm mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-300">ECE Skills Gained</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-2">Hardware Integration & GPIO Programming</h3>
                <p className="text-gray-400">
                  Learned how to interface with Raspberry Pi GPIO pins, understanding digital signal control, pin configuration (BCM vs. BOARD numbering), and proper circuit design for LED control including current-limiting resistors and safe voltage levels.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-2">Cloud Computing & Serverless Architecture</h3>
                <p className="text-gray-400">
                  Gained hands-on experience with AWS services including Lambda functions, Simple Queue Service (SQS), and IAM security policies. Understood the benefits of serverless computing for IoT applications—scalability, cost-efficiency, and reduced infrastructure management.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-2">IoT System Design</h3>
                <p className="text-gray-400">
                  Developed understanding of end-to-end IoT architecture: voice interface → cloud processing → message queuing → local device execution. This full-stack perspective is crucial for designing robust connected systems.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-2">API Integration & Event-Driven Programming</h3>
                <p className="text-gray-400">
                  Learned to work with the Alexa Skills Kit API, implement event-driven architectures where actions trigger cloud functions, and design systems that respond asynchronously to user input.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Overall Experience */}
          <Card className="bg-black/60 border-blue-500/30 backdrop-blur-sm mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-300">Overall Experience & Reflection</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-400">
                This project significantly deepened my interest in the Computer Systems & Software thread at Georgia Tech. Working at the intersection of hardware, cloud services, and software engineering showed me how various ECE disciplines come together to create practical solutions.
              </p>
              <p className="text-gray-400">
                What started as a simple LED controller became a comprehensive exploration of modern IoT architecture. I gained confidence in my ability to learn new technologies independently, debug complex system integrations, and design scalable solutions.
              </p>
              <p className="text-gray-400">
                Moving forward, I plan to expand this project by integrating additional smart home devices, implementing more sophisticated voice commands, and exploring real-time communication protocols like MQTT. This foundation has opened up possibilities for future projects in home automation, industrial IoT, and edge computing.
              </p>
              <p className="text-gray-400">
                The most valuable lesson was understanding that ECE isn't just about theory—it's about building real systems that solve tangible problems. This hands-on experience reinforced my passion for embedded systems and cloud-connected devices.
              </p>
            </CardContent>
          </Card>

          {/* Technologies Used */}
          <Card className="bg-black/60 border-blue-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-300">Technologies Used</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {["Amazon Web Services", "AWS Lambda", "Alexa Skills Kit", "Python", "Raspberry Pi", "IoT"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-blue-950/50 border border-blue-400/30 rounded-lg text-blue-200"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
