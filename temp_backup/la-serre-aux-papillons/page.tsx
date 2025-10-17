import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Play, Calendar, Clock, Users, Award, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "La Serre aux Papillons - Film",
  description: "Découvrez 'La Serre aux Papillons', un film musical poétique qui explore la beauté et la fragilité de la vie à travers la musique.",
}

const cast = [
  { name: "Marie Dubois", role: "Réalisatrice & Scénariste" },
  { name: "Thomas Martin", role: "Directeur de la Photographie" },
  { name: "Sophie Laurent", role: "Directrice Musicale" },
  { name: "Jean-Pierre Moreau", role: "Compositeur" },
]

const awards = [
  { name: "Festival de Cannes", category: "Meilleure Bande Originale", year: "2024" },
  { name: "César du Cinéma", category: "Meilleur Film Musical", year: "2024" },
  { name: "Prix Lumière", category: "Meilleure Réalisation", year: "2024" },
]

export default function LaSerreAuxPapillonsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="hero-section relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
          <Image
            src="/images/la-serre-hero.jpg"
            alt="La Serre aux Papillons"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à l'accueil
            </Link>
            
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-title text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              La Serre aux{" "}
              <span className="text-gradient bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Papillons
              </span>
            </motion.h1>
            
            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Un film musical poétique qui explore la beauté et la fragilité de la vie 
              à travers la musique et les émotions.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button size="xl" className="group">
                <Play className="mr-2 h-5 w-5" />
                Voir la bande-annonce
              </Button>
              <Button variant="glass" size="xl">
                Réserver une séance
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Film Details */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-title mb-6">
                Synopsis
              </h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Dans une serre abandonnée au cœur de la ville, une jeune musicienne 
                  découvre un monde magique où les papillons chantent et la musique 
                  prend vie. À travers ses rencontres avec des personnages mystérieux, 
                  elle redécouvre sa passion pour la musique et la beauté de la vie.
                </p>
                <p>
                  Ce film musical poétique explore les thèmes de la renaissance, 
                  de l'amour et de la transformation, le tout porté par une 
                  bande originale exceptionnelle composée spécialement pour le film.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-title">Durée</div>
                    <div className="text-muted-foreground">1h 45min</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-title">Sortie</div>
                    <div className="text-muted-foreground">2024</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-title">Genre</div>
                    <div className="text-muted-foreground">Film Musical</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-title">Note</div>
                    <div className="text-muted-foreground">4.8/5</div>
                  </div>
                </div>
              </div>
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
                  src="/images/la-serre-poster.jpg"
                  alt="Affiche du film"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cast & Crew */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-title mb-4">
              Équipe du Film
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez les talents qui ont donné vie à ce projet unique.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cast.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-title">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-title mb-4">
              Récompenses
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Les reconnaissances reçues pour ce film exceptionnel.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={award.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Award className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-title">{award.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {award.category}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{award.year}</p>
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
            <h2 className="text-3xl lg:text-4xl font-title mb-6">
              Vivez l'expérience "La Serre aux Papillons"
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Découvrez ce film musical unique et laissez-vous porter par sa magie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glassDark" size="xl">
                Réserver une séance
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                Écouter la bande originale
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
