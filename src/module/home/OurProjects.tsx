'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useGetAllPortfolioQuery } from '@/state/portfolioApi'
import PortfolioCard from '@/components/cards/PortfolioCard'
import { useRouter } from 'next/navigation'
import SkeletonPostCard from '@/components/skeleton/skeleton-post-card'

export default function OurProjects() {
  const router = useRouter();
  const { data, error, isLoading } = useGetAllPortfolioQuery({
    rowsPerPage: 6,
    page: 1,
  });
  const { data: apiData } = data || {};
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section className=" px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4 md:text-4xl lg:text-5xl">
            Our Projects
          </h2>
          <p className="text-muted-foreground text-sm max-w-[100%] lg:max-w-[70%] mx-auto">
            At KarnalWebTech, our projects showcase a perfect blend of innovation, expertise, and commitment. From custom software solutions to cutting-edge mobile and web applications, we deliver projects that drive business success. Each project reflects our dedication to quality, timely delivery, and client satisfaction.
            Let us turn your vision into reality with tailored solutions that make an impact!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 md:grid-cols-3"
        >
          {isLoading ? [...Array(6)].map((_: any, i: number) => <SkeletonPostCard key={i} />) :
            apiData?.result?.map((project: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="w-full max-w-sm mx-auto"
              >
                <PortfolioCard item={project} />
              </motion.div>
            ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button size="lg" onClick={() => router.push('/projects')} className="bg-black text-primary-foreground hover:text-black hover:bg-primary/90">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  )
}