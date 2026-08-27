"use client";

import React from "react";
import {
  Code2,
  Globe,
  FileCode,
  Palette,
  Layout,
  Sparkles,
  Layers,
  Cpu,
  Server,
  Workflow,
  GitBranch,
  Smartphone,
  Eye,
  CheckSquare,
  CreditCard,
  Table,
  Globe2,
  Brain,
  Zap,
  Box,
  Bug,
  Monitor,
  ShieldCheck,
  Users,
  Target,
  Code,
  CheckCircle2,
  Briefcase,
  TrendingUp,
  LucideProps,
  HelpCircle,
} from "lucide-react";

interface IconMapperProps extends LucideProps {
  name: string;
}

const iconMap: Record<string, React.FC<LucideProps>> = {
  Code2,
  Globe,
  FileCode,
  Palette,
  Layout,
  Sparkles,
  Layers,
  Cpu,
  Server,
  Workflow,
  GitBranch,
  Smartphone,
  Eye,
  CheckSquare,
  CreditCard,
  Table,
  Globe2,
  Brain,
  Zap,
  Box,
  Bug,
  Monitor,
  ShieldCheck,
  Users,
  Target,
  Code,
  CheckCircle2,
  Briefcase,
  TrendingUp,
};

export const IconMapper: React.FC<IconMapperProps> = ({ name, ...props }) => {
  const IconComponent = iconMap[name] || HelpCircle;
  return <IconComponent {...props} />;
};
