import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Music, Users, Heart, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "À propos",
  description: "Découvrez l'histoire d'ATN Soul, notre mission et notre passion pour la musique soul, jazz et R&B.",
}

const team = [
  {
    name: "Marie Dubois",
    role: "Fondatrice & Directrice Artistique",
    image: "/images/team1.jpg",
    bio: "Passionnée de musique depuis son plus jeune âge, Marie a créé ATN Soul pour partager sa passion avec le monde.",
  },
  {
    name: "Thomas Martin",
    role: "Directeur Technique",
    image: "/images/team2.jpg",
    bio: "Expert en production musicale et en technologie, Thomas s'assure que chaque événement soit parfait.",
  },
  {
    name: "Sophie Laurent",
    role: "Responsable Événements",
    image: "/images/team3.jpg",
    bio: "Sophie orchestre chaque détail de nos événements pour créer des expériences inoubliables.",
  },
]

const values = [
  {
    icon: Music,
    title: "Passion Musicale",
    description: "Nous vivons et respirons la musique. Chaque note compte pour nous.",
  },
  {
    icon: Users,
    title: "Communauté",
    description: "Nous créons des espaces où les passionnés de musique peuvent se connecter.",
  },
  {
    icon: Heart,
    title: "Authenticité",
    description: "Nous restons fidèles à nos valeurs et à notre passion pour la musique.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Nous visons l'excellence dans tout ce que nous faisons.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Notre Histoire
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              ATN Soul est né d'une passion simple : partager la beauté et la puissance 
              de la musique soul, jazz et R&B avec le monde entier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/music">
                <Button size="lg" className="group">
                  Découvrir notre musique
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Notre Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Depuis notre création, nous nous efforçons de créer des expériences 
                musicales authentiques qui touchent l'âme et rassemblent les gens. 
                Notre mission est de promouvoir la musique soul, jazz et R&B en 
                organisant des événements exceptionnels et en soutenant les artistes émergents.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nous croyons que la musique a le pouvoir de transcender les frontières, 
                de guérir les cœurs et de créer des connexions profondes entre les gens. 
                C'est pourquoi nous nous engageons à partager cette magie avec le monde.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/images/about-mission.jpg"
                  alt="Notre mission"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Nos Valeurs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ces valeurs guident chacune de nos décisions et actions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <value.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Notre Équipe
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Rencontrez les passionnés qui font d'ATN Soul une réalité.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center group hover:shadow-lg transition-all duration-300">
                  <div className="relative h-64 overflow-hidden rounded-t-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Rejoignez l'aventure ATN Soul
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Découvrez nos événements, écoutez notre musique et faites partie 
              de notre communauté passionnée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/events">
                <Button variant="glassDark" size="lg">
                  Voir nos événements
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
